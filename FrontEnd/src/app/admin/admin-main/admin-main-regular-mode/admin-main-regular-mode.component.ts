import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { MainService } from "../../../services/main_service/main.service";
import { ScheduleService } from "../../../services/schedule_service/schedule.service";
import { HttpService } from "../../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';
import { Bus } from '../../../model/bus.type';

import * as moment from "moment";

declare var jQuery: any;

@Component({
    selector: 'app-admin-main-regular-mode',
    templateUrl: './admin-main-regular-mode.component.html',
    styleUrls: ['./admin-main-regular-mode.component.css']
})

export class AdminMainRegularModeComponent implements OnInit {

    @ViewChild('confirmModal') public confirmModal: ModalDirective;

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
    };

    public leaving_buses: Bus[];
    public returning_buses: Bus[];
    public errorMessage: string = "";
    public successMessage: string = "";
    public outbound_bus_groupId: number = 0;
    public outbound_timeId: number = 0;
    public outbound_price: number = 0;
    public returning_bus_groupId: number = 0;
    public returning_timeId: number = 0;
    public returning_price: number = 0;

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
        public _notificationsService: NotificationsService,
        public _httpService: HttpService
    ) {
    }

    ngOnInit() {
        let me = this;

        me.receiveInputParams();
        me.structHeaderLeaving();
        me.structHeaderReturn();

        let url = this._mainService.URLS.get_buses_for_edit + "?outbound_date=" + this.inputParams.outbound_date + "&leaving_from=" + this.inputParams.leaving_from + "&return_date=" + this.inputParams.return_date;

        this._httpService.sendGetRequestWithParams(url)
            .subscribe(
            data => {
                if (data.state == "success") {
                    this.leaving_buses = data.data_1;
                    this.returning_buses = data.data_2;
                }
            },
            error => {
                this.failedNotification(error);
            }
            );
    }

    public receiveInputParams() {
        let me = this;

        me.inputParams.outbound_date = me._route.snapshot.params['outbound_date'];
        me.inputParams.leaving_from = me._route.snapshot.params['leaving_from'];
        me.inputParams.return_date = me._route.snapshot.params['return_date'];
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

    public onClickBusEditMode() {
        let me = this;

        let link = ['/admin/main/bus_edit_mode', me.inputParams.outbound_date, me.inputParams.leaving_from, me.inputParams.return_date];
        me._router.navigate(link);
    }

    public onClickMovePeopleMode() {
        let me = this;

        let link = ['/admin/main/move_people_mode', me.inputParams.outbound_date, me.inputParams.leaving_from, me.inputParams.return_date];
        me._router.navigate(link);
    }

    public outboundTimeSelected(data) {
        this.outbound_bus_groupId = data.groupId;
        this.outbound_timeId = data.timeId;
        this.outbound_price = parseFloat(data.price);
    }

    public returningTimeSelected(data) {
        this.returning_bus_groupId = data.groupId;
        this.returning_timeId = data.timeId;
        this.returning_price = parseFloat(data.price);
    }

    public gotoNextStep() {
        let me = this;
        if (me.headerReturn.date != '' && me.returning_timeId == 0)
            return;

        let leaving_bus = me.leaving_buses.find(bus => (bus.group_id == me.outbound_bus_groupId));
        if (leaving_bus.price['bus_opened'] == 1) {
            this.showConfirmModal();
            return;
        } else if (me.headerReturn.date != '') {
            let returning_bus = me.returning_buses.find(bus => (bus.group_id == me.returning_bus_groupId));
            if (returning_bus.price['bus_opened'] == 1) {
                this.showConfirmModal();
                return;
            }
        }

        let link = ['/admin/main/reservation_mode',
            me.inputParams.outbound_date, me.inputParams.leaving_from, me.inputParams.return_date,
            me.outbound_bus_groupId, me.outbound_timeId, me.outbound_price,
            me.returning_bus_groupId, me.returning_timeId, me.returning_price];
        me._router.navigate(link);
    }

    showConfirmModal() {
        this.confirmModal.show();
    }

    hideConfirmModal() {
        this.confirmModal.hide();
    }

    confirmNext() {
        this.hideConfirmModal();

        let me = this;
        let link = ['/admin/main/reservation_mode',
            me.inputParams.outbound_date, me.inputParams.leaving_from, me.inputParams.return_date,
            me.outbound_bus_groupId, me.outbound_timeId, me.outbound_price,
            me.returning_bus_groupId, me.returning_timeId, me.returning_price];

        me._router.navigate(link);
    }

    successNotification(notifyText: string) {
        this._notificationsService.success('Success', notifyText);
    }

    failedNotification(notifyText: string) {
        this._notificationsService.error('Failed', notifyText);
    }

}
