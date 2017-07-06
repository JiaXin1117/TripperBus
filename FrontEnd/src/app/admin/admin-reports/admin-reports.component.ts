import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

import { ReportService } from "../../services/report_service/report.service";
import { HttpService } from "../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import { Bus, Reservation, Time } from '../../model';
import { PaymentMethod, Autorize_net_url } from '../../common';

import * as moment from "moment";

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {

  public dateType = "Booking";
  public datePeriod = "Monthly";

  public date1: Date = new Date();
  public date2: Date = new Date();

  public dateMode = "month";
  public reports: any[];
  
  public notifyOptions = {
    timeOut: 3000,
    position: ["bottom", "right"],
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: true,
  };
  
  public constructor(
                    public _httpService: HttpService,
                    public _reportService: ReportService,
                    public _notificationsService: NotificationsService,
  ) {
    this.reports = Array();
  }
  
  ngOnInit() {
    
  }

  public getDate1(): number {
    return this.date1 && this.date1.getTime() || new Date().getTime();
  }

  public getDate2(): number {
    return this.date2 && this.date2.getTime() || new Date().getTime();
  }
 
  onChangeDatePeriod() {
    this.dateMode = this.datePeriod == "Monthly" ? "month" : "day";
  }

  show() {
    let date1 = this.date1;
    let date2 = this.date2;

    if (this.datePeriod == 'Monthly') {
      date1.setDate(1);
      date2 = new Date(date1);
      date2.setMonth(date1.getMonth() + 1);
    } else {
      date2.setDate(date2.getDate() + 1);
    }

    if (date2 < date1) {
      this.failedNotification("Please select To after than From.");
      return;
    }

    let dateStr1 = date1.toLocaleDateString();
    let dateStr2 = date2.toLocaleDateString();

    let url = this._reportService.URLS.get_reports + "?dateType=" + this.dateType 
    + "&date1=" + dateStr1
    + "&date2=" + dateStr2;

    console.log(dateStr1 + ":" + dateStr2);

    this._httpService.sendGetRequestWithParams(url)
      .subscribe(
      data => {
        if (data.success) {
          this.reports = data.reports;
          this.reports['totalCount'] = data.totalCount;
          this.reports['totalAmount'] = data.totalAmount;

          console.log(this.reports);
        } else {
          this.failedNotification(data.error);
        }
      },
      () => {
        this.failedNotification(this._reportService.getErrorMessage);
      });
  }

  public successNotification(notifyText: string) {
    this._notificationsService.success('Success', notifyText);
  }

  public failedNotification(notifyText: string) {
    this._notificationsService.error('Failed', notifyText);
  }


  /*
    @ViewChild('reservationModal') public reservationModal: ModalDirective;
    @ViewChild('selectedModal') public selectedModal: ModalDirective;

    public headerLeave: any = {
        city: "",
        date: "",
    };
    
    public headerReturn: any = {
        city: "",
        date: "",
    };
    
    public inputParams: any = {
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

    public reservations: Reservation[];
    public reservations_from_time: Reservation[][];

    public newReservation = new Reservation;
    public myReservation = new Reservation;

    public paymentMethod = PaymentMethod;
    public authorize_net_url = Autorize_net_url;
    public newReservation_LeavingAreaName;
    public newReservation_ReturningAreaName;

    public leaving_buses: Bus[];
    public returning_buses: Bus[];
    public errorMessage: string = "";
    public successMessage: string = "";
    public outbound_bus: Bus = null;
    public outbound_time: Time = null;
    public returning_bus: Bus = null;
    public returning_time: Time = null;
    public returning_price: number = 0;

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
    selectedEntities: Reservation[][];
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
        this.reservations = Array();
        this.reservations_from_time = Array();
        this.selectedEntities = Array();
        this.selectedReservations = Array();
        this.newReservation_LeavingAreaName = "";
        this.newReservation_ReturningAreaName ="";
    }

    ngOnInit() {

        let me = this;

        me.receiveInputParams();
        me.structHeaderLeaving();
        me.structHeaderReturn();

        me.refreshData(true);

    }

    public initData() {
        this.reservations = [];
        this.reservations_from_time = [];

        this.initNewReservation();
    }

    public initNewReservation() {
        this.newReservation.init();
        this.newReservation['Seats'] = 1;
    }

    public refreshData(reload = false) {
        if (reload) {
            this.initData();

            let url = this._mainService.URLS.get_buses_for_edit + "?outbound_date=" + this.inputParams.outbound_date + "&leaving_from=" + this.inputParams.leaving_from + "&return_date=" + this.inputParams.return_date;

            this._httpService.sendGetRequestWithParams(url)
                .subscribe(
                data => {
                    if (data.state == "success") {
                        this.leaving_buses = data.data_1;
                        this.returning_buses = data.data_2;

                        this.outbound_bus = Bus.getBusFromGroupId(this.leaving_buses, this.inputParams.outbound_bus_groupId);
                        if (this.outbound_bus) {
                            this.outbound_time = Bus.getTimeIndexFromTimeId(this.outbound_bus, this.inputParams.outbound_timeId);
                            
                            this.newReservation_LeavingAreaName = this.outbound_time['area_name'];
                        }

                        this.returning_bus = Bus.getBusFromGroupId(this.returning_buses, this.inputParams.returning_bus_groupId);
                        if(this.returning_bus) {
                            this.returning_time = Bus.getTimeIndexFromTimeId(this.returning_bus, this.inputParams.returning_timeId);

                            this.newReservation_ReturningAreaName = this.returning_time['area_name'];
                        }
                        
                        this.autoTransactionAmount();
                        
                        console.log (data);
                    }
                });

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
                        console.log(this.reservations);
                        console.log(this.reservations_from_time);
                    }
                });
        } else {
            this.initNewReservation();

            this.autoTransactionAmount();
        }
    }
    
    public receiveInputParams() {
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
    
    public structHeaderLeaving() {
            let me = this;
            
            me.headerLeave.city = me._scheduleService.getCityName(me.inputParams.leaving_from);
            me.headerLeave.date = me._scheduleService.getDateAsLongFormat(me.inputParams.outbound_date);
    }
    
    public structHeaderReturn() {
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
        this.showField.sort((a, b) => (a-b));
//        console.log(this.showField);
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

        this.selectedEntities.forEach (subArray => {
            this.selectedReservations = this.selectedReservations.concat(subArray);
        });

//        console.log (this.selectedReservations);
    }

    public addReservation() {
        let url = this._mainService.URLS.add_reservation;

        this.newReservation.copy(this.myReservation);
        this.newReservation['date'] = this.inputParams.outbound_date;
        this.newReservation['time_id'] = this.inputParams.outbound_timeId;
        this.newReservation['outbound_area_id'] = this.inputParams.leaving_from;
        this.newReservation['Made By'] = 'web';
        this.newReservation['App Scanned'] = 'Was not scanned';

        console.log (this.newReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, {reservation: this.newReservation})
        .subscribe(
            data => {
                let res = data.json();
                if (res.success) {
                    let createdReservation = res.data as Reservation;
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
                    if (res.error) {
                        this.failedNotification(res.error);
                    }
                }

                this.hideWaitingProgress();
            },
            error => {
                this.hideWaitingProgress();

                this.successMessage = "";
                this.errorMessage = this._mainService.addReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
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
//            reservations[index] = newReservation;
        }

        return index;
    }
    
    public updateReservation() {
        let url = this._mainService.URLS.update_reservation;
        let updateId = this.myReservation['id'];

        console.log (this.myReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                let res = data.json();
                if (res.success) {
                    let updatedReservation = res.data as Reservation;
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
                    if (res.error) {
                        this.failedNotification(res.error);
                    }
                }

                this.hideWaitingProgress();
            },
            error => {
                this.hideWaitingProgress();

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

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, {reservation: this.myReservation})
        .subscribe(
            data => {
                let updatedReservation = data.json() as Reservation;
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
                this.hideWaitingProgress();

                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public deleteReservation() {
        let url = this._mainService.URLS.delete_reservation;
        let deleteId = this.myReservation['id'];

        console.log (this.myReservation);

        this.showWaitingProgress();
        this._httpService.sendPostJSON(url, {id: deleteId})
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
                this.failedNotification(this.errorMessage);
            });
    }


    public showReservationModal() {
        this.reservationModal.show();
    }

    public hideReservationModal() {
        this.reservationModal.hide();
    }

    public showAddReservationModal() {
        this.myReservation.copy(this.newReservation);
        this.refreshData();
        this.showReservationModal();
    }

    public showSelectedModal() {
        this.selectedModal.show();
    }

    public hideSelectedModal() {
        this.selectedModal.hide();
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

        this.showWaitingProgress();

        let url = this._mainService.URLS.delete_soft_reservations;
        this._httpService.sendPostJSON(url, {reservations: this.selectedReservations})
        .subscribe(
            data => {
                this.selectedReservations.forEach (reservation => reservation['Seats'] = 0);

                this.updateBusTimesReservationTotal();
                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully deleted.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                console.log(data.json());

                this.hideWaitingProgress();
            },
            error => {
                this.hideWaitingProgress();

                this.successMessage = "";
                this.errorMessage = this._mainService.deleteReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public doMassNote() {
        if (!this.massText.length)
            return;

        console.log (this.selectedReservations);
        this.showWaitingProgress();

        this.selectedReservations.forEach(reservation => reservation['Note'] += "\n" + this.massText);

        let url = this._mainService.URLS.update_reservations;
        this._httpService.sendPostJSON(url, {reservations: this.selectedReservations})
        .subscribe(
            data => {
                this.hideSelectedModal();

                this.successMessage = "Notes are successfully added.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
                console.log(data.json());

                this.hideWaitingProgress();
            },
            error => {
                this.hideWaitingProgress();

                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public doMassEmail() {
        console.log (this.selectedReservations);

        this.showWaitingProgress();

        let url = this._mainService.URLS.email_reservations;
        this._httpService.sendPostJSON(url, {reservations: this.selectedReservations, mail: this.massText})
        .subscribe(
            data => {
                this.hideSelectedModal();

                this.successMessage = "Reservations are successfully re-emailed.";
                this.errorMessage = "";
                this.successNotification(this.successMessage);
//                console.log(data.json());

                this.hideWaitingProgress();
            },
            error => {
                this.hideWaitingProgress();

                this.successMessage = "";
                this.errorMessage = this._mainService.updateReservationErrorMessage;
                this.failedNotification(this.errorMessage);
            });
    }

    public autoTransactionAmount() {
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

    public updateBusTimesReservationTotal() {
        this.outbound_bus.times.forEach (time => this.updateTimesReservationTotal(time));
    }

    public updateTimesReservationTotal(time: Time) {
        let reservation_cnt = 0;

        if (this.reservations_from_time[time['id']]) {
            this.reservations_from_time[time['id']].forEach (reservation => reservation_cnt += reservation['Seats']);
        }

        time['reservation_cnt'] = reservation_cnt;
    }

    public successNotification(notifyText: string) {
        this._notificationsService.success('Success', notifyText);
    }

    public failedNotification(notifyText: string) {
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
            this.reservations_from_time[this.outbound_time['id']].forEach (reservation => {
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
            this.outbound_bus.times.forEach (time => {
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
                    this.reservations_from_time[time['id']].forEach (reservation => {
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
    }*/

}