import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from "../../../services/main_service/main.service";
import { ScheduleService } from "../../../services/schedule_service/schedule.service";
import { HttpService } from "../../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import { Bus } from '../../../model/bus.type';
export { AdminMainBusEditorComponent } from './admin-main-bus-editor/admin-main-bus-editor.component';

import * as moment from "moment";

@Component({
    selector: 'app-admin-main-bus-edit-mode',
    templateUrl: './admin-main-bus-edit-mode.component.html',
    styleUrls: ['./admin-main-bus-edit-mode.component.css']
})
export class AdminMainBusEditModeComponent implements OnInit {

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

    public onClickRegularMode() {
        let me = this;

        let link = ['/admin/main/regular_mode', me.inputParams.outbound_date, me.inputParams.leaving_from, me.inputParams.return_date];
        me._router.navigate(link);
    }

    public onClickMovePeopleMode() {
        let me = this;

        let link = ['/admin/main/move_people_mode', me.inputParams.outbound_date, me.inputParams.leaving_from, me.inputParams.return_date];
        me._router.navigate(link);
    }

    public updateBuses() {
        let url = this._mainService.URLS.update_buses_for_edit + "?outbound_date=" + this.inputParams.outbound_date + "&leaving_from=" + this.inputParams.leaving_from + "&return_date=" + this.inputParams.return_date;
        let data = this.leaving_buses.concat(this.returning_buses);
        this._httpService.sendPostJSON(url, { buses: data })
            .subscribe(
            data => {
                if (data.success) {
                    this.successMessage = "The buses are successfully updated.";
                    this.errorMessage = "";
                    this.successNotification(this.successMessage);
                } else if (data.error) {
                    this.successMessage = "";
                    this.errorMessage = data.error;
                    this.failedNotification(data.error);
                }
            },
            error => {
                this.successMessage = "";
                this.errorMessage = "Something went wrong. Please contact administrator.";
                this.failedNotification(error);
            }
            );
    }

    successNotification(notifyText: string) {
        this._notificationsService.success('Success', notifyText);
    }

    failedNotification(notifyText: string) {
        this._notificationsService.error('Failed', notifyText);
    }
}
