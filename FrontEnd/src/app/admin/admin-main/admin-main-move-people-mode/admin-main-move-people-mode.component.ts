import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { MainService} from "../../../services/main_service/main.service";
import { ScheduleService} from "../../../services/schedule_service/schedule.service";
import { HttpService} from "../../../services/http_service/http.service";
import { Bus, Time } from '../../../model';
import { NotificationsService } from 'angular2-notifications';

export * from './admin-main-bus-move/admin-main-bus-move.component';
import * as moment from "moment";

@Component({
  selector: 'app-admin-main-move-people-mode',
  templateUrl: './admin-main-move-people-mode.component.html',
  styleUrls: ['./admin-main-move-people-mode.component.css']
})

export class AdminMainMovePeopleModeComponent implements OnInit {

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
    public leaving_times: Time[];
    public returning_buses: Bus[];
    public returning_times: Time[];
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
        this.receiveInputParams();
        this.structHeaderLeaving();
        this.structHeaderReturn();
        this.refreshData();
    }
    
    public refreshData(){
        let url = this._mainService.URLS.get_buses_for_move_people + "?outbound_date=" + this.inputParams.outbound_date + "&leaving_from=" + this.inputParams.leaving_from + "&return_date=" + this.inputParams.return_date; 
        this._httpService.sendGetRequestWithParams(url)
            .subscribe(
                data => {
                    if(data.state == "success"){
                        this.leaving_buses = data.data_1;
                        this.returning_buses = data.data_2;
                        this.leaving_times = data.time_1;
                        this.returning_times = data.time_2;
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
    
    public onClickBusEditMode() {
        let me = this;
        
        let link = ['/admin/main/bus_edit_mode', me.inputParams.outbound_date, me.inputParams.leaving_from, me.inputParams.return_date]; 
        me._router.navigate(link);
    }
    
    public movePeople(){
        let url = this._mainService.URLS.move_reservations;
        let data = this.leaving_buses.concat(this.returning_buses);
        this._httpService.sendPostJSON(url, {buses: data})
            .subscribe(
                data => {
                    this.successMessage = "The reservations are successfully updated.";
                    this.errorMessage = "";
                    this.successNotification(this.successMessage);
                    this.refreshData();
                    this.successNotification(this.successMessage);
                },
                error => {
                    this.successMessage = "";
                    this.errorMessage = "Something went wrong. Please contact administrator.";
                    this.failedNotification(error);
                });
        
    }

    successNotification(notifyText: string) {
        this._notificationsService.success('Success', notifyText);
    }

    failedNotification(notifyText: string) {
        this._notificationsService.error('Failed', notifyText);
    }

}
