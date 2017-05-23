import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { MainService} from "../../../services/main_service/main.service";
import { ScheduleService} from "../../../services/schedule_service/schedule.service";
import { HttpService} from "../../../services/http_service/http.service";
import { Bus, Reservation, Time } from '../../../model';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { PaymentMethod, Autorize_net_url } from '../../../common';

import * as moment from "moment";
declare var jQuery:any;

@Component({
    selector: 'app-admin-main-reservation',
    templateUrl: './admin-main-reservation.component.html',
    styleUrls: ['./admin-main-reservation.component.css']
})
export class AdminMainReservationComponent implements OnInit {
    @ViewChild('childModal') public childModal: ModalDirective;

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

    public newReservation = new Reservation;
    public paymentMethod = PaymentMethod;
    public authorize_net_url = Autorize_net_url;
    public newReservation_LeavingAreaName = "";
    public newReservation_ReturningAreaName ="";

    public leaving_buses: Bus[];
    public returning_buses: Bus[];
    public errorMessage: string = "";
    public successMessage: string = "";
    public outbound_bus: Bus = null;
    public outbound_time: Time = null;
    public returning_bus: Bus = null;
    public returning_time: Time = null;
    public returning_price: number = 0;
    public reservations: Reservation[] = Array();
    public reservations_from_time: Reservation[][] = Array();

    // Default selection
    showField: number[] = [];

    // Settings configuration
    fieldSettings: IMultiSelectSettings = {
        pullRight: true,
        enableSearch: false,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-default btn-block',
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

    public showChildModal(): void {
        this.childModal.show();
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }

    onShowFieldChange($event) {
        this.showField.sort((a, b) => (a-b));
        console.log(this.showField);
    }

    // array of currently selected entities in the data table
    selectedEntities: any[];

    // function to handle data/entities selected/deselected in the table 
    public setSelectedEntities($event: any) {
        this.selectedEntities = $event;
    }

    constructor(public _route: ActivatedRoute, 
                public _router: Router,
                public _mainService: MainService,
                public _scheduleService: ScheduleService,
                public _httpService: HttpService
                ) {
    }

    ngOnInit() {

        let me = this;

        me.receiveInputParams();
        me.structHeaderLeaving();
        me.structHeaderReturn();

        me.refreshData();

        me.newReservation['Seats'] = 1;
    }

    public refreshData(){
        let url = this._mainService.URLS.get_buses_for_edit + "?outbound_date=" + this.inputParams.outbound_date + "&leaving_from=" + this.inputParams.leaving_from + "&return_date=" + this.inputParams.return_date;

        this._httpService.sendGetRequestWithParams(url)
            .subscribe(
            data => {
                if (data.state == "success") {
                    this.leaving_buses = data.data_1;
                    this.returning_buses = data.data_2;
                    this._mainService.schedule_default_price = data.default_price;
                    this._mainService.reservation_fee = parseFloat(data.reservation_fee);

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
            console.log(me.inputParams.outbound_price);
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

    public addReservation() {
        let url = this._mainService.URLS.add_reservation;

        this.newReservation['date'] = this.inputParams.outbound_date;
        this.newReservation['time_id'] = this.inputParams.outbound_timeId;
        this.newReservation['outbound_area_id'] = this.inputParams.leaving_from;
        this.newReservation['Made By'] = 'web';
        this.newReservation['App Scanned'] = 'Was not scanned';

        console.log (this.newReservation);

        this._httpService.sendPostJSON(url, {reservation: this.newReservation})
        .subscribe(
            data => {
                this.successMessage = "New reservation is successfully added.";
                this.errorMessage = "";
                console.log(this.successMessage);
                let createdReservation = data.json() as Reservation;
                if (!createdReservation)
                    return;
                this.reservations.push(createdReservation);
                if (!this.reservations_from_time[this.inputParams.outbound_timeId])
                    this.reservations_from_time[this.inputParams.outbound_timeId] = Array();
                this.reservations_from_time[this.inputParams.outbound_timeId].push(createdReservation);
                this.hideChildModal();
                this.newReservation.init();
            },
            error => {
                this.successMessage = "";
                this.errorMessage = "Something went wrong. Please contact administrator.";
                console.log(this.errorMessage);
                alert(this.errorMessage);
            });
    }

    public onPaymentMethodChange(evt) {
        this.autoTransactionAmount();
    }

    public onSeatsChange(evt) {
        this.autoTransactionAmount();
    }

    public autoTransactionAmount() {
        if (this.newReservation['Payment Method'] == PaymentMethod[0] && this.newReservation['Seats'] > 0) {
            this.newReservation['Transaction Amount'] = this.newReservation['Seats'] * this.inputParams['outbound_price'] + this._mainService.reservation_fee;

            if (this.headerReturn.date != '') {
                this.newReservation['Transaction Amount'] += this.newReservation['Seats'] * this.inputParams['returning_price']
            }
        }
        else {
            this.newReservation['Transaction Amount'] = 0;
        }
        this.newReservation['Transaction Amount'] = this.newReservation['Transaction Amount'].toFixed(2);
    }
}
