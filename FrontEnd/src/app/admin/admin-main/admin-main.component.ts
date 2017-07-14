import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from "../../services/main_service/main.service";
import { HttpService } from "../../services/http_service/http.service";
import { NotificationsService } from 'angular2-notifications';

import * as moment from "moment";

declare var jQuery: any;

@Component({
    selector: 'app-admin-main',
    templateUrl: './admin-main.component.html',
    styleUrls: ['./admin-main.component.css']
})

export class AdminMainComponent implements OnInit {

    public outbound_date: any;
    public leaving_city: string;
    public return_date: string;
    public page_mode: number;

    public notifyOptions = {
//        timeOut: 3000,
        position: ["bottom", "right"],
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: true,
        maxStack: 1,
    };

    public notifyOptionsForSuccess = {
        timeOut: 3000,
        position: ["bottom", "right"],
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: true,
        maxStack: 1,
    };


    constructor(
        public _router: Router,
        public _mainService: MainService,
        public _notificationsService: NotificationsService,
        public _httpService: HttpService
    ) {
    }

    ngOnInit() {
        let me = this;

        me.initSettings();
        me.initiateVars();
        me.setDatePickers();

    }

    initSettings() {
        let url = this._mainService.URLS.get_Settings;

        this._httpService.sendGetRequestWithParams(url)
            .subscribe(
            data => {
                if (data.state == "success") {
                    console.log(data);
                    this._mainService.settings = data.settings;

                    this._mainService.settings['reservation_initial_fee'] = parseFloat(this._mainService.settings['reservation_initial_fee']);
                }
            },
            error => {
                this.failedNotification(error);
            }
            );
    }

    initiateVars() {
        let me = this;

        me.leaving_city = "0";
        me.page_mode = me._mainService.pageMode.REGULAR_MODE;
        me.return_date = "";
    }

    setDatePickers() {
        let me = this;

        jQuery("#outbound_date").datepicker({
            onSelect: function (dateStr) {
                let selectedDate = new Date(dateStr);
                jQuery("#return_date").datepicker("option", { minDate: selectedDate });
                me.outbound_date = moment(selectedDate).format("YYYY-MM-DD");
            }
        });

        jQuery("#return_date").datepicker({
            onSelect: function (dateStr) {
                me.return_date = moment(new Date(dateStr)).format("YYYY-MM-DD");
            }
        });
    }

    onPressGoButton() {
        let me = this;

        if (me.leaving_city == "0") {
            jQuery("#choose_location_modal").modal("show");
            return;
        }

        if (me.outbound_date == undefined) {
            jQuery("#choose_outbound_date_modal").modal("show");
            return;
        }

        if (me.page_mode == me._mainService.pageMode.REGULAR_MODE) {
            let link = ['/admin/main/regular_mode', me.outbound_date, me.leaving_city, me.return_date];
            me._router.navigate(link);
        } else if (me.page_mode == me._mainService.pageMode.BUS_EDIT_MODE) {
            let link = ['/admin/main/bus_edit_mode', me.outbound_date, me.leaving_city, me.return_date];
            me._router.navigate(link);
        } else {
            let link = ['/admin/main/move_people_mode', me.outbound_date, me.leaving_city, me.return_date];
            me._router.navigate(link);
        }
    }

    successNotification(notifyText: string) {
        this._notificationsService.success('Success', notifyText, this.notifyOptionsForSuccess);
    }

    failedNotification(notifyText: string) {
        this._notificationsService.error('Failed', notifyText);
    }

}
