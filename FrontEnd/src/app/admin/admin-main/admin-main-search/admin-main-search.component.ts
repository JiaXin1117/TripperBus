import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }   from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { MainService } from "../../../services/main_service/main.service";
import { ScheduleService } from "../../../services/schedule_service/schedule.service";
import { HttpService } from "../../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import { Bus, Reservation, Time } from '../../../model';
import { PaymentMethod, Autorize_net_url, 
        getDateString, 
        changeReservationsTimezone,
        calcBusesTotalSeats } from '../../../common';

import * as moment from "moment";

declare var jQuery:any;

@Component({
    selector: 'app-admin-main-search',
    templateUrl: './admin-main-search.component.html',
    styleUrls: ['./admin-main-search.component.css']
})

export class AdminMainSearchComponent implements OnInit {

    @ViewChild('reservationModal') reservationModal: ModalDirective;
    @ViewChild('selectedModal') selectedModal: ModalDirective;

    inputParams: any = {
        searchKey: "",
        searchVal: "",
        caseSensitive: false,
    };

    reservations = null;

    myReservation = new Reservation;
    myReservationDate = new Date();
    myReservationBuses = new Array();

    paymentMethod = PaymentMethod;
    authorize_net_url = Autorize_net_url;

    errorMessage: string = "";
    successMessage: string = "";

    // Default selection
    showField: number[] = [];

    // Settings configuration
    fieldSettings: IMultiSelectSettings = {
        pullRight: true,
        enableSearch: false,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-primary btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true,
        fixedTitle: true,
        showCheckAll: true,
        showUncheckAll: true,
        maxHeight: '50em'
    };

    // Text configuration
    fieldTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find',
        defaultTitle: ' Show Fields ',
        allSelected: 'All selected',
    };

    // Labels / Parents
    fieldOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Action Record' },
        { id: 2, name: 'App Scanned' },
        { id: 3, name: 'Authorize net Link' },
        { id: 4, name: 'Campaign Name' },
        { id: 5, name: 'Date Made' },
        { id: 6, name: 'Groupon Code' },
        { id: 7, name: 'IP Address' },
        { id: 8, name: 'Leg Price' },
        { id: 9, name: 'Made By' },
        { id: 10, name: 'Note' },
        { id: 11, name: 'Other Leg' },
        { id: 12, name: 'Payment Method' },
        { id: 13, name: 'Points Earned' },
        { id: 14, name: 'Points Used' },
        { id: 15, name: 'Transaction Amount' },
        { id: 16, name: 'Under Account' },
    ];

    massAction = "Delete";
    massText = "";
    massText1 = "";
    massText2 = "";

    // array of currently selected entities in the data table
    selectedReservations: Reservation[];

    notifyOptions = {
//        timeOut: 3000,
        position: ["bottom", "right"],
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: true,
        maxStack: 1,
    };

    notifyOptionsForSuccess = {
        timeOut: 3000,
        position: ["bottom", "right"],
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: true,
        maxStack: 1,
    };


    constructor(public _route: ActivatedRoute, 
                public _router: Router,
                public _mainService: MainService,
                public _scheduleService: ScheduleService,
                public _httpService: HttpService,
                public _notificationsService: NotificationsService,
                )
    {
        this.selectedReservations = Array();

        _router.events.subscribe(evt => {
            let event = evt instanceof NavigationEnd;
            if (!event)
                return;
            
            let url = decodeURI((evt as NavigationEnd).url);
            let params = url.split('/');
            let caseSensitive = params.pop();
            let searchVal = params.pop();
            let searchKey = params.pop();
            let mode = params.pop();

            if (mode != 'search_mode' || searchKey == '' || searchVal == '')
                return;

            this.inputParams.searchKey = searchKey;
            this.inputParams.searchVal = searchVal;
            this.inputParams.caseSensitive = caseSensitive;
            this.init();
        });
    }

    ngOnInit() {
    }

    init() {
        this.refreshData();
    }

    refreshData() {
        let searchVal = this.inputParams.searchVal;
        if (this.inputParams.searchKey == 'Date Made') {
            searchVal = new Date(new Date(searchVal).setHours(0, 0, 0)).toISOString();
        }

        let url = this._mainService.URLS.search_reservation 
        + "?searchKey=" + this.inputParams.searchKey 
        + "&searchVal=" + searchVal 
        + "&caseSensitive=" + this.inputParams.caseSensitive;
        
        this._httpService.sendGetRequestWithParams(url).subscribe(
            data => {
                if (data.success) {
                    this.reservations = data.data;

                    changeReservationsTimezone(this.reservations);
                }
            },
            error => {
                this.failedNotification(error);
            }
        );
    }
    
    receiveInputParams() {
      this.inputParams.searchKey = this._route.snapshot.params['searchKey']; 
      this.inputParams.searchVal = this._route.snapshot.params['searchVal']; 
      this.inputParams.caseSensitive = this._route.snapshot.params['caseSensitive']; 
    }

    showReservationModal(): void {
        this.reservationModal.show();
    }

    hideReservationModal(): void {
        this.reservationModal.hide();
    }

    showSelectedModal() {
        this.selectedModal.show();
    }

    hideSelectedModal() {
        this.selectedModal.hide();
    }

    onShowFieldChange($event) {
        this.showField.sort((a, b) => (a-b));
        console.log(this.showField);
    }

    // function to handle data/entities selected/deselected in the table 
    onSelectedReservations($event: any) {
        this.selectedReservations = $event as Reservation[];

        console.log(this.selectedReservations);
    }

    onSeatsChange(evt) {
        this.autoTransactionAmount();
    }

    editReservation(reservation: Reservation) {
        this.myReservation.copy(reservation);
        this.myReservationDate = new Date(this.myReservation['date']);

        this.getReservationBusTimes();

        this.showReservationModal();
    }
    
    copyReservation(dst: Reservation, src: Reservation) {
        Object.keys(src).forEach(key => {
            dst[key] = src[key];
        });
    }

    addReservationSeats() {
        let url = this._mainService.URLS.add_reservation_seats;
        let updateId = this.myReservation['id'];
        let oldReservation = this.reservations.find(reservation => (reservation['id'] == updateId));

        console.log(this.myReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, { reservation: this.myReservation })
            .subscribe(
            data => {
                if (data.success) {
                    let updatedReservation = data.data as Reservation;
                    if (!updatedReservation)
                        return this.hideWaitingProgress();

                    this.refreshData();
                    this.hideReservationModal();

                    this.successMessage = "Reservation#" + this.myReservation['id'] + " is successfully updated.";
                    this.errorMessage = "";
                    this.successNotification(this.successMessage);
                } else {
                    if (data.error) {
                        this.failedNotification(data.error);
                    }
                }

                this.hideWaitingProgress();
            },
            error => {
                this.hideWaitingProgress();

                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(error);
            });
    }

    updateReservationFromArray(reservations: Reservation[], reservation: Reservation) {
        if (!reservations) {
            return -1;
        }

        let index = reservations.findIndex(item => (item['id'] == reservation['id']));
        if (~index) {
            this.copyReservation(reservations[index], reservation);
        }

        return index;
    }
    
    updateReservation() {
        let url = this._mainService.URLS.update_reservation;
        let updateId = this.myReservation['id'];
        let oldReservation = this.reservations.find(reservation => (reservation['id'] == updateId));
        let isUpdateWithDate = false;

        console.log (this.myReservation);

        if (this.myReservation['date'] != oldReservation['date'] ||
            this.myReservation['time_id'] != oldReservation['time_id']) {

            if (!this.myReservation['time_id']) {
                return this.failedNotification("Please select time!");
            }

            isUpdateWithDate = true;
        }

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                if (data.success) {
                    let updatedReservation = data.data as Reservation;
                    if (!updatedReservation)
                        return this.hideWaitingProgress();

                    if (isUpdateWithDate) {
                        this.refreshData();
                    } else {
                        this.updateReservationFromArray(this.reservations, updatedReservation);
                    }

                    this.hideReservationModal();

                    this.successMessage = "Reservation#" + this.myReservation['id'] + " is successfully updated.";
                    this.errorMessage = "";
                    this.successNotification(this.successMessage);
                } else {
                    if (data.error) {
                        this.failedNotification(data.error);
                    }
                }

                this.hideWaitingProgress();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            });
    }

    holdReservation() {
        let url = this._mainService.URLS.hold_reservation;
        let updateId = this.myReservation['id'];

        console.log(this.myReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, { reservation: this.myReservation })
            .subscribe(
            data => {
                console.log(data);
                if (!data.success) {
                    return this.failedNotification(data.error);
                }

                let updatedReservation = data.data as Reservation;
                if (!updatedReservation)
                    return this.hideWaitingProgress();

                this.updateReservationFromArray(this.reservations, updatedReservation);

                this.hideReservationModal();

                this.successMessage = "Reservation#" + this.myReservation['id'] + " is held on place.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.hideWaitingProgress();

                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(error);
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    removeReservationFromArray(reservations: Reservation[], reservation: Reservation) {
        if (!reservations) {
            return -1;
        }

        let index = reservations.findIndex(item => (item['id'] == reservation['id']));
        if (index > -1) {
            reservations.splice(index, 1);
        }
        return index;
    }

    deleteSoftReservation() {
        let url = this._mainService.URLS.delete_soft_reservation;
        let deleteId = this.myReservation['id'];

        console.log (this.myReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                console.log(data);
                if (!data.success) {
                    return this.failedNotification(data.error);
                }

                let updatedReservation = data.data as Reservation;
                if (!updatedReservation)
                    return this.hideWaitingProgress();

                this.updateReservationFromArray(this.reservations, updatedReservation);

                this.hideReservationModal();

                this.successMessage = "Reservation#" + this.myReservation['id'] + " is deleted.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                this.hideWaitingProgress();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            });
    }

    deleteReservation() {
        let url = this._mainService.URLS.delete_reservation;
        let deleteId = this.myReservation['id'];

        console.log (this.myReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, {id: deleteId})
        .subscribe(
            data => {
                this.removeReservationFromArray(this.reservations, this.myReservation);

                this.hideReservationModal();

                this.successMessage = "Reservation#" + deleteId + " is permanently deleted.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                this.hideWaitingProgress();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            });
    }

    doMassAction() {
        if (!this.selectedReservations.length)
            return;

        switch (this.massAction) {
            case 'Delete':
                this.doMassDelete();
                break;

            case 'Place on Hold':
                this.doMassHold();
                break;

            case 'Note':
                this.doMassNote();
                break;

            case 'Re-Email':
                this.doMassReEmail();
                break;

            case 'Custom Email Only':
                this.doMassCustomEmail();
                break;

            case 'Text Only':
                this.doMassText();
                break;

            case 'Custom Email & Text':
                this.doMassCustomEmail_Text();
                break;

            case 'Complimentary Seats as Reserved':
                this.doMassComplimentarySeats();
                break;

            case 'Complimentary One Seat':
                this.doMassComplimentaryOneSeat();
                break;
        }
    }

    doMassDelete() {
        console.log (this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.delete_soft_reservations;
        this._httpService.sendPostJSON(url, {reservations: this.selectedReservations})
        .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                this.selectedReservations.forEach (reservation => reservation['Seats'] = 0);

                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully deleted.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                this.hideWaitingProgress();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            });
    }

    doMassHold() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.hold_reservations;
        this._httpService.sendPostJSON(url, { reservations: this.selectedReservations, subject: this.massText, body: this.massText1 })
            .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                this.selectedReservations.forEach(reservation => reservation['Seats'] = 0);

                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully held.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.holdReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    doMassNote() {
        if (!this.massText1.length) {
            return this.failedNotification('Invalid note!');
        }

        console.log(this.selectedReservations);
        this.showWaitingProgress();

        let url = this._mainService.URLS.note_reservations;
        this._httpService.sendPostJSON(url, { reservations: this.selectedReservations, note: this.massText1 })
            .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                let noteReservations = data.data as Reservation[];
                noteReservations.forEach (noteReservation => {
                    let originalReservation = this.reservations.find (reservation => reservation['id'] == noteReservation['id']);
                    originalReservation['Note'] = noteReservation['Note'];
                });

                this.hideSelectedModal();

                this.successMessage = "Notes are successfully added.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.noteReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    doMassReEmail() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.re_email_reservations;
        this._httpService.sendPostJSON(url, { reservations: this.selectedReservations, subject: this.massText })
            .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully re-emailed.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.emailReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    doMassCustomEmail() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.email_custom_reservations;
        this._httpService.sendPostJSON(url, { 
            reservations: this.selectedReservations, subject: this.massText, text: this.massText1 })
            .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully re-emailed.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.customEmailErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    doMassText() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.sendtext_reservations;
        this._httpService.sendPostJSON(url, { 
            reservations: this.selectedReservations, text: this.massText1 })
            .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                this.hideSelectedModal();

                this.successMessage = "Text successfully sent.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.textSentErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    doMassCustomEmail_Text() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.email_custom_text_reservations;
        this._httpService.sendPostJSON(url, { 
            reservations: this.selectedReservations, subject: this.massText, body: this.massText1, text: this.massText2 })
            .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully re-emailed & text sent.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.customEmailTextErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    updateReservationsNotes(reservations: Reservation[]) {
        reservations.forEach (reservation => {
            let oldReservation = this.reservations.find (item => item['id'] == reservation['id']);
            if (oldReservation) {
                oldReservation['Note'] = reservation['Note'];
            }
        });
    }

    doMassComplimentarySeats() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.complimentary_all_reservations;
        this._httpService.sendPostJSON(url, { reservations: this.selectedReservations, subject: this.massText, body: this.massText1 })
            .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                this.updateReservationsNotes(data.data);
                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully set complimentary.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.complimentaryErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    doMassComplimentaryOneSeat() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.complimentary_one_reservations;
        this._httpService.sendPostJSON(url, { reservations: this.selectedReservations, subject: this.massText, body: this.massText1 })
            .subscribe(
            data => {
                if (!data.success) {
                    return this.failedNotification (data.error);
                }

                this.updateReservationsNotes(data.data);
                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully set complimentary.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.complimentaryErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }


    autoTransactionAmount() {
        if (this.myReservation['Payment Method'] == PaymentMethod[0] && this.myReservation['Seats'] > 0) {
            this.myReservation['Transaction Amount'] = this.myReservation['Seats'] * this.inputParams['outbound_price'] + this._mainService.settings['reservation_initial_fee'];
        }
        else {
            this.myReservation['Transaction Amount'] = 0;
        }
        this.myReservation['Transaction Amount'] = this.myReservation['Transaction Amount'].toFixed(2);
    }

    isAfterToday(dateStr) {
        let date = new Date(dateStr).setHours(0, 0, 0, 0);
        let today = new Date().setHours(0, 0, 0, 0);

        return (date >= today);
    }

    onSelectReservationDate() {
        if (!this.isAfterToday(this.myReservationDate)) {
            this.failedNotification ("Please select date from today!");
            this.myReservationDate = new Date(this.myReservation['date']);

            return;
        }

        this.myReservation['date'] = getDateString(this.myReservationDate);
        this.myReservation['time_id'] = 0;
        this.myReservationBuses = Array();
        this.getReservationBusTimes();
    }

    onSelectReservationTime(timeId) {
        this.myReservation['time_id'] = timeId;
    }

    getReservationBusTimes() {
        this.showWaitingProgress();

        let url = this._mainService.URLS.get_buses_for_edit + "?outbound_date=" + this.myReservation['date'] + "&leaving_from=" + this.myReservation['outbound_area_id'];

        this._httpService.sendGetRequestWithParams(url)
            .subscribe(
            data => {
                if (data.success) {
                    this.myReservationBuses = data.data_1;
                    console.log(this.myReservationBuses);

                    calcBusesTotalSeats(this.myReservationBuses);
                }
            },
            error => {
                this.failedNotification(error);
            },
            () => {
                this.hideWaitingProgress();
            }
        );
    }

    successNotification(notifyText: string) {
        this._notificationsService.success('Success', notifyText, this.notifyOptionsForSuccess);
    }

    failedNotification(notifyText: string) {
        this._notificationsService.error('Failed', notifyText);
    }

    showWaitingProgress() {
        $('#progressDlg').addClass('show');
    }

    hideWaitingProgress() {
        $('#progressDlg').removeClass('show');
    }

}
