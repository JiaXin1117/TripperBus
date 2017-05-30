import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ScheduleService } from "../../../services/schedule_service/schedule.service";
import { HttpService } from "../../../services/http_service/http.service";
import { BACKEND_SERVER_URL } from '../../../config/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/Observable';

import * as moment from "moment";
declare var jQuery:any;

@Component({
  selector: 'app-admin-schedules-editexisting',
  templateUrl: './admin-schedules-editexisting.component.html',
  styleUrls: ['./admin-schedules-editexisting.component.css']
})
export class AdminSchedulesEditexistingComponent implements OnInit {
    @ViewChild('confirm_saveall_modal') public confirm_saveall_modal: ModalDirective;

    public inputParams: any = {
        date: "",
        button_type: "",
        area_id: "",
        schedule_type: "",
        default_dest_stop_id: "",
    };
    
    public headerInfos: any = {
        after_on: "",
        dow: "",
        date: "",
        city: "",
        date_top_heading: "",
    };
    
    public addModalHeaderInfos: any = {
        after_on: "",
        dow: "",
        date: "",
        city: "",
    };
    
    public urls: any = {
        retrieve_schedule_by_date_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_by_date",
        retrieve_group_times_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_group_times",
        retrieve_all_stops_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stops",
        save_all_url: BACKEND_SERVER_URL + "api/admin/schedule/saveall_existing_schedule",    
        add_schedule_url: BACKEND_SERVER_URL + "api/admin/schedule/add_existing_schedule",    
        save_groups_additional_info_url: BACKEND_SERVER_URL + "api/admin/schedule/save_groups_additional_infos",
//        get_all_stop_for_area_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stops_for_area",    
    };
    
    public group_times: any[] = [];
    public group_additional_infos: any[] = [];
    public arr_dest_stops: any[] = [];
    public groups: any[] = [];
    public latest_date: any;
    
    public arr_leaving_stop_shorts: string[] = [];
    public arr_hours: any[] = [];
    public arr_mins: number[] = [];
    public arr_prices: string[] = [];
    
    public adding_stops: string[] = [];
    public adding_hours: string[] = [];
    public adding_mins: string[] = [];
    //public adding_prices: string[] = [];

    public nowSaving = false;
    
    constructor(public _route: ActivatedRoute, 
                public _scheduleService: ScheduleService, 
                public _router: Router,
                public _httpService: HttpService ) { 
    }

    ngOnInit() {
        this.structTimeArray();
        this.initThis();
    }

    public initThis() {
        this.receiveParamsFromRoute()
        .subscribe(schedule_type => this.showHeaderInfos());

        //this.showHeaderInfos());
//      this.getDefaultStopID();
//      this.getAllStopsInfo();
//      this.showHeaderInfos(); 
    }
    
    public receiveParamsFromRoute() {
/*            this.inputParams.date = this._route.snapshot.params['sel_date']; 
            this.inputParams.button_type = this._route.snapshot.params['button_type']; 
            this.inputParams.area_id = this._route.snapshot.params['area_id']; 
            this.inputParams.schedule_type = this._route.snapshot.params['schedule_type']; */
            
            return this._route.params
            .switchMap((params: Params) => {
                this.inputParams.date = params['sel_date'];
                this.inputParams.button_type = params['button_type'];
                this.inputParams.area_id = params['area_id'];
                this.inputParams.schedule_type = params['schedule_type'];
                return this.inputParams.schedule_type;
            });
    }
    
    public popupAddScheduleModal() {
            this.initAddSchedules();

            jQuery("#add_schedule_modal").modal('show');
    }
    
/*    // Get default stop id from current area id.
    public getDefaultStopID() {
            let me = this;
        
            let url;
            if (me.inputParams.area_id == me._scheduleService.areaType.TYPE_NEWYORK) {
                url = me.urls.get_all_stop_for_area_url + "?area_id=" + me._scheduleService.areaType.TYPE_BA;
            } else {
                url = me.urls.get_all_stop_for_area_url + "?area_id=" + me._scheduleService.areaType.TYPE_NEWYORK;
            }

            me._httpService.sendGetRequestWithParams(url)
                .subscribe(
                    data => { 
                        if (data['state'] == 'success') {
                            me.arr_dest_stops = data['data'];
                            me.inputParams.default_dest_stop_id = me.arr_dest_stops[0]['id'];
                        }
                    },
                    error => alert(error),
                    () => {}
                );
    }
*/    

    public showHeaderInfos() {
        let me = this;
        let url = me.urls.retrieve_group_times_url + "?date=" + me.inputParams.date + "&area_id=" + me.inputParams.area_id + "&schedule_type=" + me.inputParams.schedule_type;

        me._httpService.sendGetRequestWithParams(url)
        .subscribe(
            data => {
                if (data['state'] == 'success') {
                    let response = data['data'];

                    me.group_times = response['group_times'];
                    me.groups = response['groups'];
                    me.latest_date = response['latest_date'];
                    me.arr_dest_stops = [];
                    me.arr_leaving_stop_shorts = [];

                    for (let i=0; i<Object.keys(response['stops']).length; i++) {
                        let item = response['stops'][i];
                        if (item['area_id'] == me.inputParams.area_id) {
                            me.arr_leaving_stop_shorts.push(item['short']);
                        }
                        else {
                            me.arr_dest_stops.push(item);
                        }
                    }

                    if (me.group_times.length) {
                        // Page Header.
                        me.setHeaderInfoForPage(true);

                        // Add Modal Header.
                        me.setAddModalHeaderInfoForPage(true);

                        if (Object.keys(me.group_times).length) {
                            me.initiateGroupAdditionalInfosArray(Object.keys(me.group_times).length);
                        }
                    }
                    else {
                        // Page Header.
                        me.setHeaderInfoForPage(false);

                        // Add Modal Header.
                        me.setAddModalHeaderInfoForPage(false);
                    }
                } else {
                    // Page Header.
                    me.setHeaderInfoForPage(false);

                    // Add Modal Header.
                    me.setAddModalHeaderInfoForPage(false);
                }
            });
    }

/*    
    public showHeaderInfos() {
            let me = this;
            let url = this.urls.retrieve_schedule_by_date_url + "?date=" + me.inputParams.date; 
            
            this._httpService.sendGetRequestWithParams(url)
                .subscribe(
                    data => { 
                        let response = data; 
                        if (response['state'] == 'success') { 
                            let dayInfos = response['data'];
                            
                            // Get latest schedule date for weekly schedule.
                            if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                // Collect weekly dates for this date.
                                let temp_dates = [];
                                for (let i=0; i<Object.keys(dayInfos).length; i++) {
                                    let item = dayInfos[i]; 
                                    if (item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY && item['area_id'] == me.inputParams.area_id) {
                                        temp_dates.push(item['date']);
                                    }
                                }

                                me.latest_date = me._scheduleService.getLatestWeeklyDate(temp_dates); 
                            } 
                            
                            // Page Header.
                            me.setHeaderInfoForPage(true);
                            
                            // Add Modal Header.
                            me.setAddModalHeaderInfoForPage(true);
                            
                            // Collect group_time ids.
                            let group_ids = me._scheduleService.collectGroupIDs(dayInfos);
                            if (Object.keys(group_ids).length == 0) {
                                return;
                            } 

                            let grouped_items = [];
                            for (let i=0;  i<Object.keys(group_ids).length; i++) {
                                let temp = [];
                                for (let j=0; j<Object.keys(dayInfos).length; j++) {
                                    let item = dayInfos[j]; 
                                    if (group_ids[i] == item['group_id'] && item['area_id'] == me.inputParams.area_id 
                                        && item['w_h'] == me.inputParams.schedule_type) {
                                        if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                            if (item['date'] != me.latest_date) continue;
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
                            
                            if (Object.keys(grouped_items).length != 0) {
                                grouped_items.sort(function(a, b) {
                                    if (a[0]['time'] > b[0]['time'])
                                        return 1;
                                    else {
                                        return -1;
                                    }
                                });
                                
                                me.group_times = grouped_items; 
                                me.initiateGroupAdditionalInfosArray(Object.keys(me.group_times).length);
                            }
                        } else {
                            // Page Header.
                            me.setHeaderInfoForPage(false);
                            
                            // Add Modal Header.
                            me.setAddModalHeaderInfoForPage(false);
                        }
                    }
                );
    }
    */
    
    public initiateGroupAdditionalInfosArray(param_cnt) {
        let me = this;
        
        for (let i=0; i<param_cnt; i++) {
            me.group_additional_infos[i] = {};
        } 
    }
    
    public getDOW_From_DateString(param_date_str) {
        let me = this;
        
        // Get Day of Week.
        let dateInfo = me._scheduleService.getInfo_From_YMD_String(param_date_str); 
        let d = new Date(dateInfo['year'], dateInfo['month']-1, dateInfo['day']);
        
        return d.getDay(); 
    }
    
    // Get date as wednesday march 29 2017 format from YYYY-MM-DD format.
    public getDateAsLongFormat(param_date_str) {
        let me = this;
        
        // Get Day of Week.
        let dateInfo = me._scheduleService.getInfo_From_YMD_String(param_date_str); 
        
        let result = "";
        result += me.headerInfos.dow + " " + me._scheduleService.convertMonthFormat(dateInfo['month']-1) + " " + dateInfo['day'] + " " + dateInfo['year'];
        
        return result;
    }
    
    public setHeaderInfoForPage(param_isSuccess) { 
        let me = this; 
        
        if (param_isSuccess == true) {
                // Get header related infos for edit existing.
                if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_HOLIDAY) {
                    me.headerInfos.after_on = "on";
                } else {
                    me.headerInfos.after_on = "after";
                }

                if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_HOLIDAY) {
                    me.headerInfos.date = me.inputParams.date;
                } else {
                    if (me.latest_date == "" || me.latest_date == undefined) {
                        me.headerInfos.date = me.inputParams.date;
                    } else {
                        me.headerInfos.date = me.latest_date;
                    }
                } 

                me.headerInfos.dow = me._scheduleService.convertDayOfWeekFormat(me.getDOW_From_DateString(me.inputParams.date));
                me.headerInfos.city = me._scheduleService.getCityName(me.inputParams.area_id);
                me.headerInfos.date_top_heading = me.getDateAsLongFormat(me.inputParams.date);
        } else {
                me.headerInfos.after_on = "after";
                me.headerInfos.date = me.inputParams.date;
                me.headerInfos.dow = me._scheduleService.convertDayOfWeekFormat(me.getDOW_From_DateString(me.inputParams.date));
                me.headerInfos.city = me._scheduleService.getCityName(me.inputParams.area_id);
                me.headerInfos.date_top_heading = me.getDateAsLongFormat(me.inputParams.date);
        }
    }
    
    public setAddModalHeaderInfoForPage(param_isSuccess) {
        let me = this;

        if (param_isSuccess == true) {
            if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL) {
                me.addModalHeaderInfos.after_on = "on";
            }
            else {
                me.addModalHeaderInfos.after_on = "after";
            }

            if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL || me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_NEW) {
                me.addModalHeaderInfos.date = me.inputParams.date;
            }
            else {
                if (me.latest_date == "" || me.latest_date == undefined) {
                    me.addModalHeaderInfos.date = me.inputParams.date;
                }
                else {
                    me.addModalHeaderInfos.date = me.latest_date;
                }
            }

            me.addModalHeaderInfos.dow = me._scheduleService.convertDayOfWeekFormat(me.getDOW_From_DateString(me.inputParams.date));
            me.addModalHeaderInfos.city = me._scheduleService.getCityName(me.inputParams.area_id);
        }
        else {
            me.addModalHeaderInfos.after_on = "after";
            me.addModalHeaderInfos.date = me.inputParams.date;
            me.addModalHeaderInfos.dow = me._scheduleService.convertDayOfWeekFormat(me.getDOW_From_DateString(me.inputParams.date));
            me.addModalHeaderInfos.city = me._scheduleService.getCityName(me.inputParams.area_id);
        }
    }
    
    
/*
    public getAllStopsInfo() {
        let me = this;
        let stops_url = this.urls.retrieve_all_stops_url; 
        
        this._httpService.sendGetRequestWithParams(stops_url)
            .subscribe(
                data => {
                    let temp = [];
                    me.arr_dest_stops = [];
                    for (let i=0; i<Object.keys(data['data']).length; i++) {
                        let item = data['data'][i];
                        if (item['area_id'] == me.inputParams.area_id) {
                            temp.push(item['short']);
                        }
                        else {
                            me.arr_dest_stops.push(item);
                        }
                    } 
                    me.arr_leaving_stop_shorts = temp; 
                }
            );
    }*/
    
    public structTimeArray() {
        let me = this;
        
        for (let i=0; i<24; i++) {
            let temp = {};
            
            if (i < 10) {
                if (i == 0) {
                    temp['text'] = "12 AM";
                } else {
                    temp['text'] = i + " AM";
                }
                
                temp['value'] = "0" + i;
            } else {
                if (i < 12) {
                    temp['text'] = i + " AM";
                } else if (i == 12) {
                    temp['text'] = "12 PM";
                } else if (i > 12) {
                    let idx = i - 12;
                    temp['text'] = idx + " PM";
                }
                temp['value'] = i;
            }
            me.arr_hours.push(temp);
        }  
        for (let i=0; i<60; i+=5) {
            let temp;
            if (i < 10) {
                temp = "0" + i;
            } else {
                temp = i;
            }
            me.arr_mins.push(temp);
        }
        for (let i=0; i<=50; i+=0.5) {
            let temp = i.toFixed(2);
            me.arr_prices.push(temp);
        }
        
        this.initAddSchedules();
    }

    public initAddSchedules() {
        for (let i=0; i<3; i++) {
            this.adding_stops[i] = "";
            this.adding_hours[i] = "";
            this.adding_mins[i] = "";
            //me.adding_prices[i] = "";
        }
    }
    
    public onSaveAll() { 
        let me = this; 

        if (this.nowSaving) {
            return;
        }
        this.nowSaving = true;

        if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_NEW 
            || me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL) {
            
                for (let i=0; i<Object.keys(me.group_times).length; i++) {
                    let group_time = me.group_times[i];
                    me.group_additional_infos[i]['New'] = 1;
                    
                    for (let j=0; j<Object.keys(group_time).length; j++) {
                        let item = group_time[j];

                        // item['date'] = moment(me.inputParams.date).utc().format("YYYY-MM-DD");
                        item['date'] = me.inputParams.date;
                        item['hour'] = item['time'].substring(0, 2);
                        item['min'] = item['time'].substring(3, 5); 

                        if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL) {
                                item['w_h'] = me._scheduleService.w_hType.TYPE_HOLIDAY;
                                item['dow'] = moment(me.inputParams.date).day();
                                item['area_id'] = me.inputParams.area_id;
                        }
                    }
                } 
        } 
        
        /*let temp_url;
        if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_NEW || me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL) {
            temp_url = me.urls.add_schedule_url;
        } else {
            temp_url = me.urls.save_all_url;
        }*/ 
        
        let temp_url = me.urls.save_all_url;
        
        // Struct post data for saving all.
        let temp_post_data = {};
        temp_post_data['group_main_info'] = me.group_times;
        temp_post_data['group_additional_info'] = me.group_additional_infos; 
        console.log(temp_post_data);
        
        me._httpService.sendPostJSON(temp_url, temp_post_data)
            .subscribe(
                data => {
                    this.showConfirmSaveAllModal();
//                    jQuery("#confirm_saveall_modal").modal('show');
//                    jQuery("#confirm_saveall_modal").on('hidden.bs.modal', alert("abc"));
                },
                error => alert(error),
                () => {}
            );
    }
    
    public onAddSchedule() {
        let me = this; 
        
        let insert_request = [];
        for (let i=0; i<Object.keys(me.adding_stops).length; i++) {
            if (me.adding_stops[i] != "" && me.adding_hours[i] != "" && me.adding_mins[i] != "" /*&& me.adding_prices[i] != ""*/) {
                let temp = {};
                
                temp['stop_area'] = me.adding_stops[i];
                temp['hour'] = me.adding_hours[i];
                temp['min'] = me.adding_mins[i];
                temp['time'] = temp['hour'] + ":" + temp['min'] + ":00"; 
                
                // Set date_from value.
                if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_EDIT_EXISTING) {
                    if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_HOLIDAY) {
                        temp['date'] = me._scheduleService.convertDateToUTC(me.inputParams.date);
                    } else {
                        if (me.latest_date == "" || me.latest_date == undefined) {
                            temp['date'] = me.inputParams.date;
                        } else {
                            temp['date'] = me.latest_date;
                        }
                    }
                } else {
                    temp['date'] = me.inputParams.date;
                } 
                
                temp['dow'] = moment(me.inputParams.date).day();
                temp['area_id'] = me.inputParams.area_id;
                
                if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL) {
                    temp['w_h'] = me._scheduleService.w_hType.TYPE_HOLIDAY;
                } else if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_NEW) {
                    temp['w_h'] = me._scheduleService.w_hType.TYPE_WEEKLY;
                } else {
                    temp['w_h'] = me.inputParams.schedule_type;
                }
                
                insert_request.push(temp);
            } 
        } 

        if (insert_request.length) {
            me.group_times.push(insert_request);
            
            // Add empty array to group_additional_infos array.
            me.group_additional_infos.push({});
        }
        
        jQuery("#add_schedule_modal").modal('hide');
        
        /*this._httpService.sendPostJSON(me.urls.add_schedule_url, insert_request)
            .subscribe(
                data => {
                    
                },
                error => alert(error),
                () => {}
            ); */
    }
    
    public refreshCurrentPage(param_btnType) {
        let link;
        let me = this;
        if (param_btnType == me._scheduleService.buttonType.TYPE_EDIT_EXISTING) {
            link = ['/admin/schedules_edit', me.inputParams.date, me._scheduleService.buttonType.TYPE_EDIT_EXISTING
                        , me.inputParams.area_id, me.inputParams.schedule_type]; 
            me._router.navigate(link);
            
        } else if (param_btnType == me._scheduleService.buttonType.TYPE_GENERATE_NEW) {
            link = ['/admin/schedules_edit', me.inputParams.date, me._scheduleService.buttonType.TYPE_GENERATE_NEW
                        , me.inputParams.area_id, me._scheduleService.w_hType.TYPE_WEEKLY]; 
            me._router.navigate(link);
        } else {
            link = ['/admin/schedules_edit', me.inputParams.date, me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL
                        , me.inputParams.area_id, me._scheduleService.w_hType.TYPE_HOLIDAY]; 
            me._router.navigate(link);
        }
        
//        setTimeout(window.location.reload(), 200);
        this.initThis();

        this.nowSaving = false;
    }

    public showConfirmSaveAllModal(): void {
        this.confirm_saveall_modal.show();
    }

    public hideConfirmSaveAllModal(): void {
        this.confirm_saveall_modal.hide();
    }

}
