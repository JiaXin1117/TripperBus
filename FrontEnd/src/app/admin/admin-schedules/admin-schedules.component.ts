import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http_service/http.service";
import {ScheduleService} from "../../services/schedule_service/schedule.service";
import {AuthService} from "../../services/auth_service/auth.service";
import { BACKEND_SERVER_URL } from '../../config/config';
import { Router }   from '@angular/router';
import * as moment from "moment";

declare var jQuery:any;

@Component({
  selector: 'app-admin-schedules',
  templateUrl: './admin-schedules.component.html',
  styleUrls: ['./admin-schedules.component.css']
})
export class AdminSchedulesComponent implements OnInit {

    public urls: any = {
        retrieve_schedule_by_month_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_by_month",
        retrieve_schedule_by_date_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_by_date"  
    };
    
    public calendarInfo: any = {
        cur_date_str: "",
        cur_year: "",
        cur_month: ""
    };
    
    public selected_date: string = "";
    
    public sorted_groups: any[] = [];
    public sorted_groups_schedule_type: any;
    
    public month_firstday_dow: number[] = [];
    
    public dayinfos_in_month_newyork: any[] = [];
    public dayinfos_in_month_ba: any[] = [];
    
    constructor( public _httpService: HttpService, 
                public _router: Router, 
                public _scheduleService: ScheduleService ) {
            
    }

    ngOnInit() {
            this.initiate();
            this.setCurentDateForCalendar();
            this.addDaysToCalendar(); 
    }
    
    public initiate() {
            let me = this;
    }
    
    public onEditSchedule(param_areaId) { 
            this.hideModal();
            let link = ['/admin/schedules_edit', this.selected_date, this._scheduleService.buttonType.TYPE_EDIT_EXISTING
                        , param_areaId, this.sorted_groups_schedule_type]; 
            this._router.navigate(link);
    }
    
    public onGenNewSchedule(param_areaId) { 
            this.hideModal();
            let link = ['/admin/schedules_edit', this.selected_date, this._scheduleService.buttonType.TYPE_GENERATE_NEW
                        , param_areaId, this.sorted_groups_schedule_type];
            this._router.navigate(link);
    }
    
    public onGenSpecialSchedule(param_areaId) {
            this.hideModal();
            let link = ['/admin/schedules_edit', this.selected_date, this._scheduleService.buttonType.TYPE_GENERATE_SPECIAL
                        , param_areaId, this.sorted_groups_schedule_type];
            this._router.navigate(link);
    }
    
    public addDaysInDateRange(firstDay, lastDay, areaType) { 
            let me = this; 
        
            if(firstDay.getDate() == 1) {
                let dow = firstDay.getDay(); 
                
                me.month_firstday_dow = [];
                for (let i=0; i<dow; i++) {
                    me.month_firstday_dow[i] = i;
                }
            }

            let url_month = this.calendarInfo.cur_month + 1;
            let url = this.urls.retrieve_schedule_by_month_url + "?year=" + this.calendarInfo.cur_year + "&month=" + url_month; 

            this._httpService.sendGetRequestWithParams(url)
                .subscribe(
                    data => { 
                        let response = data; 
                        
                        if (areaType == me._scheduleService.areaType.TYPE_NEWYORK) {
                            me.dayinfos_in_month_newyork = [];
                        } else {
                            me.dayinfos_in_month_ba = [];
                        }
                        
                        if (response['state'] == 'success') { 
                            while(firstDay <= lastDay) { 
                                let firstDay_converted = moment(me.convertDate(firstDay)).utc().format("YYYY-MM-DD"); 

                                let items_for_this_date = [];
                                for (let i=0; i<Object.keys(response['data']).length; i++) {
                                    let item = response['data'][i]; 
                                    if (item['date'] == firstDay_converted && item['area_id'] == areaType ) {
                                        items_for_this_date.push(item); 
                                    }
                                } 
                                if (Object.keys(items_for_this_date).length == 0) {
                                    me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_WEEKLY, 0);
                                    
                                    let newDate = firstDay.setDate(firstDay.getDate() + 1);
                                    firstDay = new Date(newDate); 
                                    continue;
                                } 
                                
                                // Collect group ids.
                                let group_ids = me._scheduleService.collectGroupIDs(items_for_this_date);

                                //********************** Get grouped holiday items. *********************************
                                let grouped_items = [];
                                for (let i=0;  i<Object.keys(group_ids).length; i++) {
                                    let temp = [];
                                    for (let j=0; j<Object.keys(items_for_this_date).length; j++) {
                                        let item = items_for_this_date[j]; 
                                        if (group_ids[i] == item['group_id'] && item['w_h'] == me._scheduleService.w_hType.TYPE_HOLIDAY
                                            && item['date'] == firstDay_converted) { 
                                            temp.push(item);
                                        }
                                    } 
                                    
                                    if (Object.keys(temp).length != 0) { 
                                        grouped_items.push(temp);
                                    }
                                } 
                                if (Object.keys(grouped_items).length != 0) { 
                                    me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_HOLIDAY, Object.keys(grouped_items).length);
                                } else {
                                    //**************** Get grouped weekly items. **************************************
                                                                         
                                    // Collect weekly dates for this date.
                                    let temp_dates = [];
                                    for (let j=0; j<Object.keys(items_for_this_date).length; j++) {
                                        let item = items_for_this_date[j]; 
                                        if (item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                            temp_dates.push(item['schedule_date']);
                                        }
                                    }
                                    
                                    // Get latest date for weekly schedule.
                                    let latest_date = me._scheduleService.getLatestWeeklyDate(temp_dates); 
                                    
                                    grouped_items = [];
                                    for (let i=0;  i<Object.keys(group_ids).length; i++) {
                                        let temp = [];
                                        for (let j=0; j<Object.keys(items_for_this_date).length; j++) {
                                            let item = items_for_this_date[j]; 
                                            if (group_ids[i] == item['group_id'] && item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY
                                                && item['schedule_date'] == latest_date ) {
                                                temp.push(item);
                                            }
                                        }
                                        
                                        if (Object.keys(temp).length != 0) { 
                                            grouped_items.push(temp);
                                        }
                                    }
                                    if (Object.keys(grouped_items).length == 0) {
                                        me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_WEEKLY, 0);
                                    
                                        let newDate = firstDay.setDate(firstDay.getDate() + 1);
                                        firstDay = new Date(newDate); 
                                        continue;
                                    } else {
                                        if (firstDay_converted == latest_date) { // if new schedule date
                                            me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_WEEKLY_NEW, Object.keys(grouped_items).length);
                                        } else {
                                            me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_WEEKLY, Object.keys(grouped_items).length);
                                        }
                                        
                                    }
                                }
                                
                                let newDate = firstDay.setDate(firstDay.getDate() + 1);
                                firstDay = new Date(newDate); 
                            } 
                        } 
                        
                    }
                );
    }
    
    public setDayInfo(areaType, isHoliday, busCnt) {
            let me = this;

            let temp_day = {};
            temp_day['isHoliday'] = isHoliday;
            temp_day['bus_cnt'] = busCnt;

            if (areaType == me._scheduleService.areaType.TYPE_NEWYORK) {
                me.dayinfos_in_month_newyork.push(temp_day);
            } else {
                me.dayinfos_in_month_ba.push(temp_day);
            }
    }
    
    public onClickEachDate(selected_date, areaType, scheduleType) { 
            let me = this;
            
            me.sorted_groups_schedule_type = scheduleType;
            me.sorted_groups = [];
            
            let cur_month_temp = me.calendarInfo.cur_month + 1;
            if (cur_month_temp < 10) {
                cur_month_temp = "0" + cur_month_temp;
            }
            
            if (selected_date < 10) {
                selected_date = "0" + selected_date;
            }
            
            me.selected_date = me.calendarInfo.cur_year + "-" + cur_month_temp + "-" + selected_date; 
            let url = this.urls.retrieve_schedule_by_date_url + "?date=" + moment(me.selected_date).utc().format("YYYY-MM-DD"); 
            
            this._httpService.sendGetRequestWithParams(url)
                .subscribe(
                    data => { 
                        let response = data; 
                        if (response['state'] == 'success') { 
                            
                            let group_ids = [];
                            for (let i=0; i<Object.keys(response['data']).length; i++) {
                                let item = response['data'][i]; 
                                
                                if (group_ids.indexOf(item['group_id']) == -1) {
                                    group_ids.push(item['group_id']);
                                }
                            } 
                            
                            // Get latest schedule date for weekly schedule.
                            let latest_date;
                            if (scheduleType == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                let temp_dates = [];
                                for (let j=0; j<Object.keys(response['data']).length; j++) {
                                    let item = response['data'][j]; 
                                    if (item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY && item['area_id'] == areaType) {
                                        temp_dates.push(item['date']);
                                    }
                                }

                                latest_date = me._scheduleService.getLatestWeeklyDate(temp_dates); 
                            }
                            
                            let grouped_items = [];
                            for (let i=0;  i<Object.keys(group_ids).length; i++) {
                                
                                let temp = [];
                                for (let j=0; j<Object.keys(response['data']).length; j++) {
                                    let item = response['data'][j]; 
                                    if (group_ids[i] == item['group_id'] && item['area_id'] == areaType && item['w_h'] == scheduleType) {
                                        if (scheduleType == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                            if (item['date'] != latest_date) continue;
                                        }
                                        
                                        temp.push(item);
                                    }
                                }
                                if (Object.keys(temp).length == 0) {
                                    continue;
                                }
                                
                                temp.sort(function(a, b) {
                                    if (a['time'] > b['time'])
                                        return 1;
                                    else {
                                        return -1;
                                    }
                                });

                                grouped_items.push(temp);
                                
                            } 
                            
                            if (Object.keys(grouped_items).length == 0) {
                                me.sorted_groups = []; 
                                me.showModalForDate(areaType);
                                return;
                            }
                            
                            grouped_items.sort(function(a, b) {
                                if (a[0]['time'] > b[0]['time'])
                                    return 1;
                                else {
                                    return -1;
                                }
                            });
                            
                            me.sorted_groups = grouped_items; 
                            me.showModalForDate(areaType);
                        } else {
                            me.showModalForDate(areaType);
                        }
                    }
                );
    }
    
    public showModalForDate(areaType) {
        let me = this;
        
        if (areaType == me._scheduleService.areaType.TYPE_NEWYORK) {
            jQuery("#schedule_per_day_modal_NY").modal('show');
        } else {
            jQuery("#schedule_per_day_modal_BA").modal('show');
        }
    }
    
    public compareTime(a, b) {
        if (a['time'] > b['time'])
            return 1;
        else {
            return -1;
        }
    }
    // Convert date to "2017-03-02" type.
    public convertDate(d) {
            return [
                d.getFullYear(),
                ('0' + (d.getMonth() + 1)).slice(-2),
                ('0' + d.getDate()).slice(-2)
            ].join('-'); 
    }
    
    public setCurentDateForCalendar() {
            let d = new Date();

            this.calendarInfo.cur_year = d.getFullYear();
            this.calendarInfo.cur_month = d.getMonth();
            this.calendarInfo.cur_date_str = this._scheduleService.convertMonthFormat(this.calendarInfo.cur_month) + " " + this.calendarInfo.cur_year;
    }
    
    public showModal() { 
            //jQuery("#schedule_per_day_modal").modal('show');
    }
    
    public hideModal() { 
            jQuery("#schedule_per_day_modal_NY").modal('hide');
            jQuery("#schedule_per_day_modal_BA").modal('hide');
    }
    
    public addDaysToCalendar() {
            let me = this;
        
            let firstDay = new Date(me.calendarInfo.cur_year, me.calendarInfo.cur_month, 1); 
            let lastDay = new Date(me.calendarInfo.cur_year, me.calendarInfo.cur_month + 1, 0); 
            this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_NEWYORK); 
            
            firstDay = new Date(me.calendarInfo.cur_year, me.calendarInfo.cur_month, 1); 
            lastDay = new Date(me.calendarInfo.cur_year, me.calendarInfo.cur_month + 1, 0);
            this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_BA); 
    }
    
    public prevMonth() {
            let me = this;
        
            if ((this.calendarInfo.cur_month - 1) == -1) {
                this.calendarInfo.cur_month = 11;
                this.calendarInfo.cur_year -= 1;
            } else {
                this.calendarInfo.cur_month -= 1;
            }
            this.calendarInfo.cur_date_str = this._scheduleService.convertMonthFormat(this.calendarInfo.cur_month) + " " + this.calendarInfo.cur_year;
        
            let firstDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month, 1); 
            let lastDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month + 1, 0); 
            this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_NEWYORK);
            
            firstDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month, 1); 
            lastDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month + 1, 0); 
            this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_BA);
    }
    
    public nextMonth() {
            let me = this;
        
            if ((me.calendarInfo.cur_month + 1) == 12) {
                this.calendarInfo.cur_month = 0;
                this.calendarInfo.cur_year += 1;
            } else {
                this.calendarInfo.cur_month += 1;
            }
            this.calendarInfo.cur_date_str = this._scheduleService.convertMonthFormat(this.calendarInfo.cur_month) + " " + this.calendarInfo.cur_year;
        
            let firstDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month, 1); 
            let lastDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month + 1, 0); 
            this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_NEWYORK);
            
            firstDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month, 1); 
            lastDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month + 1, 0); 
            this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_BA);
    }
    
}
