import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import {MainService} from "../../../services/main_service/main.service";
import {ScheduleService} from "../../../services/schedule_service/schedule.service";

@Component({
  selector: 'app-admin-main-move-people-mode',
  templateUrl: './admin-main-move-people-mode.component.html',
  styleUrls: ['./admin-main-move-people-mode.component.css']
})
export class AdminMainMovePeopleModeComponent implements OnInit {

    protected headerLeave: any = {
        city: "",
        date: "",
    };
    
    protected headerReturn: any = {
        city: "",
        date: "",
    };
    
    protected inputParams: any = {
        outbound_date: "",
        leaving_from: "",
        return_date: "",
    };

    constructor(private _route: ActivatedRoute, 
                private _router: Router,
                private _mainService: MainService,
                private _scheduleService: ScheduleService
                ) {
    }

    ngOnInit() {
            let me = this;

            me.receiveInputParams();
            me.structHeaderLeaving();
            me.structHeaderReturn();
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

}
