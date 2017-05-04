import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

import { MainService} from "../../../services/main_service/main.service";
import { ScheduleService} from "../../../services/schedule_service/schedule.service";
import { HttpService} from "../../../services/http_service/http.service";
import { Bus } from '../../../model/bus.type';
import * as moment from "moment";
declare var jQuery:any;

@Component({
    selector: 'app-admin-main-regular-mode',
    templateUrl: './admin-main-regular-mode.component.html',
    styleUrls: ['./admin-main-regular-mode.component.css']
})
export class AdminMainRegularModeComponent implements OnInit {

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
            
            let url = this._mainService.URLS.get_buses_for_edit + "?outbound_date=" + this.inputParams.outbound_date + "&leaving_from=" + this.inputParams.leaving_from + "&return_date=" + this.inputParams.return_date; 
        
            this._httpService.sendGetRequestWithParams(url)
                .subscribe(
                    data => {
                        if(data.state == "success"){
                            this.leaving_buses = data.data_1;
                            this.returning_buses = data.data_2;
                            this._mainService.schedule_default_price = data.default_price;
                        }
                    });
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

}
