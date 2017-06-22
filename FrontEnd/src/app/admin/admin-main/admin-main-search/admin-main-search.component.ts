import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }   from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { MainService } from "../../../services/main_service/main.service";
import { ScheduleService } from "../../../services/schedule_service/schedule.service";
import { HttpService } from "../../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import { Bus, Reservation, Time } from '../../../model';
import { PaymentMethod, Autorize_net_url } from '../../../common';

import * as moment from "moment";
declare var jQuery:any;

@Component({
    selector: 'app-admin-main-search',
    templateUrl: './admin-main-search.component.html',
    styleUrls: ['./admin-main-search.component.css']
})
export class AdminMainSearchComponent implements OnInit {
    @ViewChild('reservationModal') public reservationModal: ModalDirective;
    @ViewChild('selectedModal') public selectedModal: ModalDirective;

    public inputParams: any = {
        searchKey: "",
        searchVal: "",
        caseSensitive: false,
    };

    public reservations = null;

    public myReservation = new Reservation;

    public paymentMethod = PaymentMethod;
    public authorize_net_url = Autorize_net_url;

    public errorMessage: string = "";
    public successMessage: string = "";

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
        { id: 1, name: 'Groupon Code' },
        { id: 2, name: 'Campaign Name' },
        { id: 3, name: 'Payment Method' },
        { id: 4, name: 'Authorize net Link' },
        { id: 5, name: 'IP Address' },
        { id: 6, name: 'Date Made' },
        { id: 7, name: 'Made By' },
        { id: 8, name: 'Note' },
        { id: 9, name: 'App Scanned' },
        { id: 10, name: 'Leg Price' },
        { id: 11, name: 'Transaction Amount' },
        { id: 12, name: 'Under Account' },
        { id: 13, name: 'Points Used' },
        { id: 14, name: 'Points Earned' },
        { id: 15, name: 'Action Record' },
        { id: 16, name: 'Other Leg' }
    ];

    public massAction = "Delete";
    public massText = "";

    // array of currently selected entities in the data table
    selectedReservations: Reservation[];

    public notifyOptions = {
        timeOut: 3000,
        position: ["bottom", "right"],
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: true,
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

    public refreshData() {
        let url = this._mainService.URLS.search_reservation 
        + "?searchKey=" + this.inputParams.searchKey 
        + "&searchVal=" + this.inputParams.searchVal 
        + "&caseSensitive=" + this.inputParams.caseSensitive;
        
        this._httpService.sendGetRequestWithParams(url).subscribe(
          data => {
            if (data.state == "success") {
              this.reservations = data.data;
              
              console.log (data);
            }
        });
    }
    
    public receiveInputParams() {
      this.inputParams.searchKey = this._route.snapshot.params['searchKey']; 
      this.inputParams.searchVal = this._route.snapshot.params['searchVal']; 
      this.inputParams.caseSensitive = this._route.snapshot.params['caseSensitive']; 
    }

    public showReservationModal(): void {
        this.reservationModal.show();
    }

    public hideReservationModal(): void {
        this.reservationModal.hide();
    }

    public showSelectedModal() {
        this.selectedModal.show();
    }

    public hideSelectedModal() {
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

    public editReservation(reservation: Reservation) {
        this.myReservation.copy(reservation);

        this.showReservationModal();
    }
    
    public copyReservation(dst: Reservation, src: Reservation) {
        Object.keys(src).forEach(key => {
            dst[key] = src[key];
        });
    }

    public updateReservationFromArray(reservations: Reservation[], reservation: Reservation) {
        if (!reservations) {
            return -1;
        }

        let index = reservations.findIndex(item => (item['id'] == reservation['id']));
        if (~index) {
            this.copyReservation(reservations[index], reservation);
        }

        return index;
    }
    
    public updateReservation() {
        let url = this._mainService.URLS.update_reservation;
        let updateId = this.myReservation['id'];

        console.log (this.myReservation);

        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                let res = data.json();
                if (res.success) {
                    let updatedReservation = res.data as Reservation;
                    if (!updatedReservation)
                        return;

                    this.updateReservationFromArray(this.reservations, updatedReservation);

                    this.hideReservationModal();

                    this.successMessage = "Reservation#" + this.myReservation['id'] + " is successfully updated.";
                    this.errorMessage = "";
                    this.successNotification(this.successMessage);
                } else {
                    if (res.error) {
                        this.failedNotification(res.error);
                    }
                }
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public removeReservationFromArray(reservations: Reservation[], reservation: Reservation) {
        if (!reservations) {
            return -1;
        }

        let index = reservations.findIndex(item => (item['id'] == reservation['id']));
        if (index > -1) {
            reservations.splice(index, 1);
        }
        return index;
    }

    public deleteSoftReservation() {
        let url = this._mainService.URLS.delete_soft_reservation;
        let deleteId = this.myReservation['id'];

        console.log (this.myReservation);

        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                let updatedReservation = data.json() as Reservation;
                if (!updatedReservation)
                    return;

                this.updateReservationFromArray(this.reservations, updatedReservation);

                this.hideReservationModal();

                this.successMessage = "Reservation#" + this.myReservation['id'] + " is deleted.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public deleteReservation() {
        let url = this._mainService.URLS.delete_reservation;
        let deleteId = this.myReservation['id'];

        console.log (this.myReservation);

        this._httpService.sendPostJSON(url, {id: deleteId})
        .subscribe(
            data => {
                this.removeReservationFromArray(this.reservations, this.myReservation);

                this.hideReservationModal();

                this.successMessage = "Reservation#" + deleteId + " is permanently deleted.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public doMassAction() {
        if (!this.selectedReservations.length)
            return;

        switch (this.massAction) {
            case 'Delete':
            this.doMassDelete();
            break;

            case 'Note':
            this.doMassNote();
            break;

            case 'Re-Email':
            this.doMassEmail();
            break;
        }
    }

    public doMassDelete() {
        console.log (this.selectedReservations);

        let url = this._mainService.URLS.delete_soft_reservations;
        this._httpService.sendPostJSON(url, {reservations: this.selectedReservations})
        .subscribe(
            data => {
                this.selectedReservations.forEach (reservation => reservation['Seats'] = 0);

                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully deleted.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                console.log(data.json());
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public doMassNote() {
        if (!this.massText.length)
            return;

        console.log (this.selectedReservations);

        this.selectedReservations.forEach(reservation => reservation['Note'] += "\n" + this.massText);

        let url = this._mainService.URLS.update_reservations;
        this._httpService.sendPostJSON(url, {reservations: this.selectedReservations})
        .subscribe(
            data => {
                this.hideSelectedModal();

                this.successMessage = "Reservation Notes are successfully updated.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                console.log(data.json());
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public doMassEmail() {
        console.log (this.selectedReservations);

        let url = this._mainService.URLS.email_reservations;
        this._httpService.sendPostJSON(url, {reservations: this.selectedReservations, mail: this.massText})
        .subscribe(
            data => {
                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully re-emailed.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
//                console.log(data.json());
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public autoTransactionAmount() {
        if (this.myReservation['Payment Method'] == PaymentMethod[0] && this.myReservation['Seats'] > 0) {
            this.myReservation['Transaction Amount'] = this.myReservation['Seats'] * this.inputParams['outbound_price'] + this._mainService.settings['reservation_initial_fee'];
        }
        else {
            this.myReservation['Transaction Amount'] = 0;
        }
        this.myReservation['Transaction Amount'] = this.myReservation['Transaction Amount'].toFixed(2);
    }

    public successNotification(notifyText: string) {
        this._notificationsService.success('Success', notifyText);
    }

    public failedNotification(notifyText: string) {
        this._notificationsService.error('Failed', notifyText);
    }

}
