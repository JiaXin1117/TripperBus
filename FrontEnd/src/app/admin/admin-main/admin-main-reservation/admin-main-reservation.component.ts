import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { MainService } from "../../../services/main_service/main.service";
import { ScheduleService } from "../../../services/schedule_service/schedule.service";
import { HttpService } from "../../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import { Bus, Reservation, Time } from '../../../model';
import { PaymentMethod, Autorize_net_url,
        getDateString,
        changeReservationsTimezone } from '../../../common';

import * as moment from "moment";

declare var jQuery: any;

@Component({
    selector: 'app-admin-main-reservation',
    templateUrl: './admin-main-reservation.component.html',
    styleUrls: ['./admin-main-reservation.component.css']
})

export class AdminMainReservationComponent implements OnInit {

    @ViewChild('reservationModal') reservationModal: ModalDirective;
    @ViewChild('selectedModal') selectedModal: ModalDirective;

    headerLeave: any = {
        city: "",
        date: "",
    };

    headerReturn: any = {
        city: "",
        date: "",
    };

    inputParams: any = {
        outbound_date: "",
        leaving_from: "",
        return_date: "",
        outbound_bus_groupId: 0,
        outbound_timeId: 0,
        outbound_price: 0,
        returning_bus_groupId: 0,
        returning_timeId: 0,
        returning_price: 0
    };

    reservations: Reservation[];
    reservations_from_time: Reservation[][];

    newReservation = new Reservation;
    myReservation = new Reservation;
    myReservationDate = new Date();
    myReservationBuses = new Array();

    paymentMethod = PaymentMethod;
    authorize_net_url = Autorize_net_url;
    newReservation_LeavingAreaName;
    newReservation_ReturningAreaName;

    leaving_buses: Bus[];
    returning_buses: Bus[];
    errorMessage: string = "";
    successMessage: string = "";
    outbound_bus: Bus = null;
    outbound_time: Time = null;
    returning_bus: Bus = null;
    returning_time: Time = null;
    returning_price: number = 0;
    leaving_holidayName = '';
    returning_holidayName = '';

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

    // array of currently selected entities in the data table
    selectedEntities: Reservation[][];
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
    ) {
        this.reservations = Array();
        this.reservations_from_time = Array();
        this.selectedEntities = Array();
        this.selectedReservations = Array();
        this.newReservation_LeavingAreaName = "";
        this.newReservation_ReturningAreaName = "";
    }

    ngOnInit() {

        let me = this;

        me.receiveInputParams();
        me.structHeaderLeaving();
        me.structHeaderReturn();

        me.refreshData(true);

    }

    initData() {
        this.reservations = [];
        this.reservations_from_time = [];

        this.initNewReservation();
    }

    initNewReservation() {
        this.newReservation.init();
        this.newReservation['Seats'] = 1;
    }

    refreshData(reload = false) {
        if (reload) {
            this.initData();

            let url = this._mainService.URLS.get_buses_for_edit + "?outbound_date=" + this.inputParams.outbound_date + "&leaving_from=" + this.inputParams.leaving_from + "&return_date=" + this.inputParams.return_date;

            this._httpService.sendGetRequestWithParams(url)
                .subscribe(
                data => {
                    if (data.state == "success") {
                        this.leaving_buses = data.data_1;
                        this.returning_buses = data.data_2;
                        this.leaving_holidayName = data.holidayName1;
                        this.returning_holidayName = data.holidayName2;

                        if (this.leaving_holidayName.length) {
                            this.leaving_holidayName += ', ';
                        }
                        if (this.returning_holidayName.length) {
                            this.returning_holidayName += ', ';
                        }

                        this.outbound_bus = Bus.getBusFromGroupId(this.leaving_buses, this.inputParams.outbound_bus_groupId);
                        if (this.outbound_bus) {
                            this.outbound_time = Bus.getTimeIndexFromTimeId(this.outbound_bus, this.inputParams.outbound_timeId);

                            this.newReservation_LeavingAreaName = this.outbound_time['area_name'];
                        }

                        this.returning_bus = Bus.getBusFromGroupId(this.returning_buses, this.inputParams.returning_bus_groupId);
                        if (this.returning_bus) {
                            this.returning_time = Bus.getTimeIndexFromTimeId(this.returning_bus, this.inputParams.returning_timeId);

                            this.newReservation_ReturningAreaName = this.returning_time['area_name'];
                        }

                        this.autoTransactionAmount();

                        console.log(data);
                    }
                },
                error => {
                    this.failedNotification(error);
                }
                );

            url = this._mainService.URLS.retrieve_reservations_by_date_url + "?outbound_date=" + this.inputParams.outbound_date + "&leaving_from=" + this.inputParams.leaving_from + "&return_date=" + this.inputParams.return_date;

            this._httpService.sendGetRequestWithParams(url)
                .subscribe(
                data => {
                    if (data.state == "success") {
                        this.reservations = data.data;
                        for (let i = 0; i < this.reservations.length; i++) {
                            if (!this.reservations_from_time[this.reservations[i].time_id])
                                this.reservations_from_time[this.reservations[i].time_id] = [];
                            this.reservations_from_time[this.reservations[i].time_id].push(this.reservations[i]);
                        }

                        changeReservationsTimezone(this.reservations);

                        console.log(this.reservations);
                        console.log(this.reservations_from_time);
                    }
                },
                error => {
                    this.failedNotification(error);
                }
                );
        } else {
            this.initNewReservation();

            this.autoTransactionAmount();
        }
    }

    receiveInputParams() {
        let me = this;

        me.inputParams.outbound_date = me._route.snapshot.params['outbound_date'];
        me.inputParams.leaving_from = me._route.snapshot.params['leaving_from'];
        me.inputParams.return_date = me._route.snapshot.params['return_date'];
        me.inputParams.outbound_bus_groupId = me._route.snapshot.params['outbound_bus_groupId'];
        me.inputParams.outbound_timeId = me._route.snapshot.params['outbound_timeId'];
        me.inputParams.outbound_price = parseFloat(me._route.snapshot.params['outbound_price']);
        me.inputParams.returning_bus_groupId = me._route.snapshot.params['returning_bus_groupId'];
        me.inputParams.returning_timeId = me._route.snapshot.params['returning_timeId'];
        me.inputParams.returning_price = parseFloat(me._route.snapshot.params['returning_price']);
    }

    structHeaderLeaving() {
        let me = this;

        me.headerLeave.city = me._scheduleService.getCityName(me.inputParams.leaving_from);
        me.headerLeave.date = me._scheduleService.getDateAsLongFormat(me.inputParams.outbound_date);
    }

    structHeaderReturn() {
        let me = this;

        // Set return city.
        if (me.inputParams.leaving_from == me._scheduleService.areaType.TYPE_NEWYORK) {
            me.headerReturn.city = me._scheduleService.getCityName(me._scheduleService.areaType.TYPE_BA);
        } else {
            me.headerReturn.city = me._scheduleService.getCityName(me._scheduleService.areaType.TYPE_NEWYORK);
        }

        me.headerReturn.date = me._scheduleService.getDateAsLongFormat(me.inputParams.return_date);
    }

    onShowFieldChange($event) {
        this.showField.sort((a, b) => (a - b));
    }

    onPaymentMethodChange(evt) {
        this.autoTransactionAmount();
    }

    onSeatsChange(evt) {
        this.autoTransactionAmount();
    }

    // function to handle data/entities selected/deselected in the table 
    onSelectedReservations($event: any, timeId: number) {
        this.selectedEntities[timeId] = Array();
        this.selectedEntities[timeId] = $event as Reservation[];
        this.selectedReservations = [];

        this.selectedEntities.forEach(subArray => {
            this.selectedReservations = this.selectedReservations.concat(subArray);
        });
    }

    addReservation() {
        let url = this._mainService.URLS.add_reservation;

        this.newReservation.copy(this.myReservation);
        this.newReservation['date'] = this.inputParams.outbound_date;
        this.newReservation['time_id'] = this.inputParams.outbound_timeId;
        this.newReservation['outbound_area_id'] = this.inputParams.leaving_from;
        this.newReservation['Made By'] = 'web';
        this.newReservation['App Scanned'] = 'Was not scanned';

        console.log(this.newReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, { reservation: this.newReservation })
            .subscribe(
            data => {
                if (data.success) {
                    let createdReservation = data.data as Reservation;
                    if (!createdReservation)
                        return this.hideWaitingProgress();

                    this.reservations.push(createdReservation);
                    if (!this.reservations_from_time[this.inputParams.outbound_timeId])
                        this.reservations_from_time[this.inputParams.outbound_timeId] = Array();
                    this.reservations_from_time[this.inputParams.outbound_timeId].push(createdReservation);

                    this.outbound_time['reservation_cnt'] += this.newReservation['Seats'];

                    this.hideReservationModal();
                    this.refreshData();

                    this.successMessage = "Reservation #" + createdReservation['id'] + " successfully added.";
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
                this.errorMessage = this._mainService.addReservationErrorMessage;
                this.failedNotification(error);
            });
    }

    editReservation(reservation: Reservation) {
        this.myReservation.copy(reservation);

        this.showReservationModal();
    }

    copyReservation(dst: Reservation, src: Reservation) {
        Object.keys(src).forEach(key => {
            dst[key] = src[key];
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

        console.log(this.myReservation);

        if (this.myReservation['date'] != oldReservation['date'] ||
            this.myReservation['time_id'] != oldReservation['time_id']) {
            return this.updateReservationWithDate();
        }

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, { reservation: this.myReservation })
            .subscribe(
            data => {
                if (data.success) {
                    let updatedReservation = data.data as Reservation;
                    if (!updatedReservation)
                        return this.hideWaitingProgress();

                    let oldReservation = this.reservations.find(item => (item['id'] == updateId));
                    let update_Time = Bus.getTimeIndexFromTimeId(this.outbound_bus, this.myReservation['time_id']);
                    update_Time['reservation_cnt'] += updatedReservation['Seats'] - oldReservation['Seats'];

                    this.updateReservationFromArray(this.reservations, updatedReservation);

                    this.hideReservationModal();
                    this.refreshData();

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

    updateReservationWithDate() {
        if (!this.myReservation['time_id']) {
            return this.failedNotification("Please select time!");
        }

        let url = this._mainService.URLS.add_reservation;
        let updateId = this.myReservation['id'];
        let oldReservation = this.reservations.find(reservation => (reservation['id'] == updateId));
        let newReservation = new Reservation;

        newReservation.copy(this.myReservation);

        console.log(newReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, { reservation: newReservation })
            .subscribe(
            data => {
                if (data.success) {
                    let createdReservation = data.data as Reservation;
                    if (!createdReservation)
                        return this.hideWaitingProgress();

                    this.myReservation.copy(oldReservation);
                    this.deleteSoftReservationWithDate();
                } else {
                    if (data.error) {
                        this.failedNotification(data.error);
                        this.hideWaitingProgress();
                    }
                }
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.addReservationErrorMessage;
                this.failedNotification(error);
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

        console.log(this.myReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, { reservation: this.myReservation })
            .subscribe(
            data => {
                let updatedReservation = data as Reservation;
                if (!updatedReservation)
                    return this.hideWaitingProgress();

                let oldReservation = this.reservations.find(item => (item['id'] == deleteId));
                let update_Time = Bus.getTimeIndexFromTimeId(this.outbound_bus, this.myReservation['time_id']);
                update_Time['reservation_cnt'] += updatedReservation['Seats'] - oldReservation['Seats'];

                this.updateReservationFromArray(this.reservations, updatedReservation);

                this.hideReservationModal();
                this.refreshData();

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

    deleteSoftReservationWithDate() {
        let url = this._mainService.URLS.delete_soft_reservation;

        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                let updatedReservation = data as Reservation;
                if (!updatedReservation)
                    return this.hideWaitingProgress();

                this.refreshData(true);

                this.hideReservationModal();

                this.successMessage = "Reservation#" + this.myReservation['id'] + " is successfully updated.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            },
            () => {
                this.hideWaitingProgress();
            });
    }

    deleteReservation() {
        let url = this._mainService.URLS.delete_reservation;
        let deleteId = this.myReservation['id'];

        console.log(this.myReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, { id: deleteId })
            .subscribe(
            data => {
                let deleteTime = Bus.getTimeIndexFromTimeId(this.outbound_bus, this.myReservation['time_id']);
                deleteTime['reservation_cnt'] -= this.myReservation['Seats'];

                this.removeReservationFromArray(this.reservations, this.myReservation);
                this.removeReservationFromArray(this.reservations_from_time[this.myReservation['time_id']], this.myReservation);

                this.hideReservationModal();
                this.initNewReservation();

                this.successMessage = "Reservation#" + deleteId + " is permanently deleted.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);

                this.hideWaitingProgress();
            },
            error => {
                this.hideWaitingProgress();

                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(error);
            });
    }


    showReservationModal() {
        this.myReservationDate = new Date(this.myReservation['date']);
        this.reservationModal.show();

        this.getReservationBusTimes();
    }

    hideReservationModal() {
        this.reservationModal.hide();
    }

    showAddReservationModal() {
        this.myReservation.copy(this.newReservation);
        this.refreshData();
        this.showReservationModal();
    }

    showSelectedModal() {
        this.selectedModal.show();
    }

    hideSelectedModal() {
        this.selectedModal.hide();
    }

    doMassAction() {
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

    doMassDelete() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.delete_soft_reservations;
        this._httpService.sendPostJSON(url, { reservations: this.selectedReservations })
            .subscribe(
            data => {
                this.selectedReservations.forEach(reservation => reservation['Seats'] = 0);

                this.updateBusTimesReservationTotal();
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

    doMassNote() {
        if (!this.massText.length)
            return;

        console.log(this.selectedReservations);
        this.showWaitingProgress();

        this.selectedReservations.forEach(reservation => reservation['Note'] += "\n" + this.massText);

        let url = this._mainService.URLS.update_reservations;
        this._httpService.sendPostJSON(url, { reservations: this.selectedReservations })
            .subscribe(
            data => {
                this.hideSelectedModal();

                this.successMessage = "Notes are successfully added.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                this.hideWaitingProgress();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            });
    }

    doMassEmail() {
        console.log(this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.email_reservations;
        this._httpService.sendPostJSON(url, { reservations: this.selectedReservations, mail: this.massText })
            .subscribe(
            data => {
                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully re-emailed.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                this.hideWaitingProgress();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(error);
                this.hideWaitingProgress();
            });
    }

    autoTransactionAmount() {
        if (this.myReservation['Payment Method'] == PaymentMethod[0] && this.myReservation['Seats'] > 0) {
            this.myReservation['Transaction Amount'] = this.myReservation['Seats'] * this.inputParams['outbound_price'] + this._mainService.settings['reservation_initial_fee'];

            if (this.headerReturn.date != '') {
                this.myReservation['Transaction Amount'] += this.myReservation['Seats'] * this.inputParams['returning_price']
            }
        }
        else {
            this.myReservation['Transaction Amount'] = 0;
        }
        this.myReservation['Transaction Amount'] = this.myReservation['Transaction Amount'].toFixed(2);
    }

    updateBusTimesReservationTotal() {
        this.outbound_bus.times.forEach(time => this.updateTimesReservationTotal(time));
    }

    updateTimesReservationTotal(time: Time) {
        let reservation_cnt = 0;

        if (this.reservations_from_time[time['id']]) {
            this.reservations_from_time[time['id']].forEach(reservation => reservation_cnt += reservation['Seats']);
        }

        time['reservation_cnt'] = reservation_cnt;
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
        console.log(this.myReservationDate);

        this._httpService.sendGetRequestWithParams(url)
            .subscribe(
            data => {
                if (data.state == "success") {
                    this.myReservationBuses = data.data_1;
                    console.log(this.myReservationBuses);
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

    showDriverList() {
        let w = window.open();
        w.document.title = "TripperBus Reservations";

        let contents = `
            <style>
            .bus_top {
                color: black;
                font-weight: bold;
                font-size: 15px;
                font-family: verdana, arial, helvetica;
            }

            .table_display_links {
                color: black;
                font-size: 13px;
                font-family: verdana, arial, helvetica;
            }
            </style>
        `;

        contents += `
            <div align="center">
            <table bordercolor="black" border="1" cellpadding="5" cellspacing="0">
            <tbody>
        `;

        contents += `
            <tr><td align="center" colspan="4" class="bus_top">
                <b>Leaving ` + this.headerLeave.date + ` from ` + this.headerLeave.city + `</b>
            </td></tr>
            <tr>
                <td class="bus_top"><b>Name</b></td>
                <td class="bus_top"><b>Reservation #</b></td>
                <td class="bus_top"><b>Payment Method</b></td>
                <td class="bus_top"><b>Seats</b></td>
            </tr>
            <tr>
                <td align="center" colspan="4" class="bus_top"><br></td>
            </tr>
            <tr>
                <td colspan="4" class="bus_top">
                From ` + this.outbound_time['stop_area'] + `. at ` + this.outbound_time['time'] + `. Stop Total: ` + this.outbound_time['reservation_cnt'] + `
                </td>
            </tr>
        `;

        if (this.reservations_from_time[this.outbound_time['id']]) {
            this.reservations_from_time[this.outbound_time['id']].forEach(reservation => {
                contents += `<tr>`;
                contents += `
                    <td class="table_display_links">` +
                    reservation['First Name'] + ', ' + reservation['Last Name'] + ` 
                    </td>
                    <td class="table_display_links">` + reservation['id'] + `</td>
                    <td class="table_display_links" width="250">` +
                    reservation['Payment Method'] +
                    ((reservation['Seats'] == 0) ? `<br/>` + reservation['Note'] : '') + `
                    </td>
                    <td class="table_display_links">` + reservation['Seats'] + `</td>
                `;
                contents += `</tr>`;
            });
        }

        let bus_reservation_total = 0;

        if (this.outbound_bus.times) {
            this.outbound_bus.times.forEach(time => {
                bus_reservation_total += time['reservation_cnt'];

                if (time.id == this.outbound_time.id)
                    return;

                contents += `
                    <tr>
                        <td align="center" colspan="4" class="bus_top">
                        ------------------------------------------------------------------------------------------------------
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" class="bus_top">
                            From ` + time['stop_area'] + `. at ` + time['time'] + `. Stop Total: ` + time['reservation_cnt'] + `
                        </td>
                    </tr>
                `;

                if (this.reservations_from_time[time['id']]) {
                    this.reservations_from_time[time['id']].forEach(reservation => {
                        contents += `<tr>`;
                        contents += `
                            <td class="table_display_links">` +
                            reservation['First Name'] + ', ' + reservation['Last Name'] + ` 
                            </td>
                            <td class="table_display_links">` + reservation['id'] + `</td>
                            <td class="table_display_links" width="250">` +
                            reservation['Payment Method'] +
                            ((reservation['Seats'] == 0) ? `<br/>` + reservation['Note'] : '') + `
                            </td>
                            <td class="table_display_links">` + reservation['Seats'] + `</td>
                        `;
                        contents += `</tr>`;
                    });
                }
            });
        }

        contents += `
            <tr>
                <td colspan="4" align="center" class="bus_top">Bus Total: ` + bus_reservation_total + `</td>
            </tr>
            </tbody></table>
            </div>
        `;

        $(w.document.body).html(contents);
    }

}
