import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

import {MainService} from "../../../services/main_service/main.service";
import {ScheduleService} from "../../../services/schedule_service/schedule.service";
import {HttpService} from "../../../services/http_service/http.service";

import * as moment from "moment";
declare var jQuery:any;

@Component({
    selector: 'app-admin-main-regular-mode',
    templateUrl: './admin-main-regular-mode.component.html',
    styleUrls: ['./admin-main-regular-mode.component.css']
})
export class AdminMainRegularModeComponent implements OnInit {

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

    protected selected_group_main_infos_outbound: any[] = [];
    protected selected_group_additional_infos_outbound: any[] = [];

    protected selected_group_main_infos_return: any[] = [];
    protected selected_group_additional_infos_return: any[] = [];

    protected all_stops: any[] = [];

    constructor(private _route: ActivatedRoute, 
                private _router: Router,
                private _mainService: MainService,
                private _scheduleService: ScheduleService,
                private _httpService: HttpService
                ) {
    }

    ngOnInit() {
            let me = this;

            me.receiveInputParams();
            me.structHeaderLeaving();
            me.structHeaderReturn();

            me.get_all_stops(); 
            me.get_schedules_for_outbound();
            me.get_schedules_for_return();
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
            if (me.inputParams.return_date != undefined && me.inputParams.return_date != "") {
                me.headerReturn.date = me._scheduleService.getDateAsLongFormat(me.inputParams.return_date);
            }
            
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

    // Check whether current schedule is weekly or holiday.
    public get_schedule_type(param_schedules) {
        let me = this;

        let isHolidaySchedule = 0;
        for (let i=0; i<Object.keys(param_schedules).length; i++) {
            let item = param_schedules[i];

            if (item['w_h'] == me._scheduleService.w_hType.TYPE_HOLIDAY && item['area_id'] == me.inputParams.leaving_from) {
                isHolidaySchedule = 1;
                break;
            }
        }

        if (isHolidaySchedule == 1) {
            return me._scheduleService.w_hType.TYPE_HOLIDAY;
        }

        return me._scheduleService.w_hType.TYPE_WEEKLY;
    }

    // Get number of reservations for specific bus schedule. FMRGJ-KR
    public get_reservations_cnt(param_reservations, param_item) {
        let me = this;

        let cnt = 0;
        for (let i=0; i<Object.keys(param_reservations).length; i++) {
            let item = param_reservations[i];

            if (item['date'] == param_item['date'] && item['time'] == param_item['time'] 
                && item['outbound_area_id'] == param_item['area_id'] && item['valid'] == me._scheduleService.scheduleDisabilty.TYPE_ENABLED ) {
                    cnt++;    
                }
        }

        return cnt;
    }
    
    // Get outbound informaitons of current schedules. FMRGJ-KR
    public get_schedules_for_outbound() {
        let me = this;
        let url = me._mainService.URLS.retrieve_schedules_by_date_url + "?date=" + moment(me.inputParams.outbound_date).utc().format("YYYY-MM-DD"); 
        
        me._httpService.sendGetRequestWithParams(url)
            .subscribe(
                data => { 
                    let response = data; 

                    if (response['state'] == 'success') { 
                        let dayInfos = response['data'];

                        // Get schedule type of outbound date.
                        let schedule_type = me.get_schedule_type(dayInfos); 

                        let weekly_schedule_latest_date;
                        
                        // Get latest schedule date for weekly schedule.
                        if (schedule_type == me._scheduleService.w_hType.TYPE_WEEKLY) {
                            // Collect weekly dates for this date.
                            let temp_dates = [];
                            for (let i=0; i<Object.keys(dayInfos).length; i++) {
                                let item = dayInfos[i]; 
                                if (item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY && item['area_id'] == me.inputParams.leaving_from) {
                                    temp_dates.push(item['date']);
                                }
                            }

                            weekly_schedule_latest_date = me._scheduleService.getLatestWeeklyDate(temp_dates); 
                        } 
                        
                        // Collect group ids.
                        let group_ids = me._scheduleService.collectGroupIDs(dayInfos);
                        if (Object.keys(group_ids).length == 0) {
                            return;
                        } 

                        // *********************** Get group main informations.
                        let reservation_url = me._mainService.URLS.retrieve_reservations_by_date_url + "?date=" 
                                                + moment(me.inputParams.outbound_date).utc().format("YYYY-MM-DD")
                                                + "&leaving_from=" + me.inputParams.leaving_from; 
                        me._httpService.sendGetRequestWithParams(reservation_url)
                            .subscribe(
                                data => { 
                                    let reservations;
                                    if (data['status'] == 'success') {
                                        reservations = data['data'];
                                    } else {
                                        reservations = undefined;
                                    } 

                                    let grouped_items = [];
                                    for (let i=0;  i<Object.keys(group_ids).length; i++) {
                                        let temp = [];

                                        for (let j=0; j<Object.keys(dayInfos).length; j++) { 
                                            let item = dayInfos[j]; 
                                            if (group_ids[i] == item['group_id'] && item['area_id'] == me.inputParams.leaving_from 
                                                && item['w_h'] == schedule_type) {
                                                if (schedule_type == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                                    if (item['date'] != weekly_schedule_latest_date) continue;
                                                }

                                                // Get reservation count.
                                                if (reservations != undefined) {
                                                    item['reservation_cnt'] = me.get_reservations_cnt(reservations, item);
                                                } else {
                                                    item['reservation_cnt'] = 0;
                                                }
                                                
                                                // Get stop short name.
                                                item['stop_short'] = item['stop_area'];
                                                
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
                                        
                                        me.selected_group_main_infos_outbound = grouped_items; 
                                    } 
                                }
                            );

                        // Get group main informations. ***********************

                        // *********************** Get group additional informations.
                        let group_additional_url = me._mainService.URLS.retrieve_group_additional_info_url; 
                        me._httpService.sendPostRequestWithParams(group_additional_url, group_ids)
                            .subscribe(
                                data => { 
                                    if (data['state'] == 'success') {
                                        me.selected_group_additional_infos_outbound = data['data']; 
                                    }
                                }
                            );

                        // Get group additional informations. ***********************
                    } 
                }
            );
    }

    // Get outbound informaitons of current schedules. FMRGJ-KR
    public get_schedules_for_return() {
        let me = this;

        if (me.inputParams.return_date == undefined || me.inputParams.return_date == "") {
            return;
        }

        let url = me._mainService.URLS.retrieve_schedules_by_date_url + "?date=" + moment(me.inputParams.return_date).utc().format("YYYY-MM-DD"); 
        
        me._httpService.sendGetRequestWithParams(url)
            .subscribe(
                data => { 
                    let response = data; 

                    if (response['state'] == 'success') { 
                        let dayInfos = response['data'];

                        // Get schedule type of outbound date.
                        let schedule_type = me.get_schedule_type(dayInfos); 

                        let weekly_schedule_latest_date;
                        let return_areaID = me.get_return_areaID_from_leaving_areaID(me.inputParams.leaving_from); 
                        
                        // Get latest schedule date for weekly schedule.
                        if (schedule_type == me._scheduleService.w_hType.TYPE_WEEKLY) {
                            // Collect weekly dates for this date.
                            let temp_dates = [];
                            for (let i=0; i<Object.keys(dayInfos).length; i++) {
                                let item = dayInfos[i]; 
                                if (item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY && item['area_id'] == return_areaID) {
                                    temp_dates.push(item['date']);
                                }
                            }

                            weekly_schedule_latest_date = me._scheduleService.getLatestWeeklyDate(temp_dates); 
                        } 
                        
                        // Collect group ids.
                        let group_ids = me._scheduleService.collectGroupIDs(dayInfos);
                        if (Object.keys(group_ids).length == 0) {
                            return;
                        } 

                        // *********************** Get group main informations.
                        let reservation_url = me._mainService.URLS.retrieve_reservations_by_date_url + "?date=" 
                                                + moment(me.inputParams.return_date).utc().format("YYYY-MM-DD")
                                                + "&leaving_from=" + return_areaID; 
                        me._httpService.sendGetRequestWithParams(reservation_url)
                            .subscribe(
                                data => { 
                                    let reservations;
                                    if (data['status'] == 'success') {
                                        reservations = data['data'];
                                    } else {
                                        reservations = undefined;
                                    }

                                    let grouped_items = [];
                                    for (let i=0;  i<Object.keys(group_ids).length; i++) {
                                        let temp = [];

                                        for (let j=0; j<Object.keys(dayInfos).length; j++) {
                                            let item = dayInfos[j]; 
                                            if (group_ids[i] == item['group_id'] && item['area_id'] == return_areaID 
                                                && item['w_h'] == schedule_type) {
                                                if (schedule_type == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                                    if (item['date'] != weekly_schedule_latest_date) continue;
                                                }

                                                // Get reservation count.
                                                if (reservations != undefined) {
                                                    item['reservation_cnt'] = me.get_reservations_cnt(reservations, item);
                                                } else {
                                                    item['reservation_cnt'] = 0;
                                                }
                                                
                                                // Get stop short name.
                                                item['stop_short'] = item['stop_area'];
                                                
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
                                        
                                        me.selected_group_main_infos_return = grouped_items; 
                                    } 
                                }
                            );

                        // Get group main informations. ***********************

                        // *********************** Get group additional informations.
                        let group_additional_url = me._mainService.URLS.retrieve_group_additional_info_url; 
                        me._httpService.sendPostRequestWithParams(group_additional_url, group_ids)
                            .subscribe(
                                data => { 
                                    if (data['state'] == 'success') {
                                        me.selected_group_additional_infos_return = data['data']; 
                                    }
                                }
                            );

                        // Get group additional informations. ***********************
                    } 
                }
            );
    }

    // Get return area id from leaving area id. FMRGJ-KR
    public get_return_areaID_from_leaving_areaID(param_leaving_areaID) {
        let me = this;

        if (param_leaving_areaID == me._scheduleService.areaType.TYPE_NEWYORK) {
            return me._scheduleService.areaType.TYPE_BA;
        }

        return me._scheduleService.areaType.TYPE_NEWYORK;
    }


    // Get related stop information from short stop name. FMRGJ-KR
    public get_stop_info_from_stopshort(param_stop_short) {
        let me = this;

        for (let i=0; i<Object.keys(me.all_stops).length; i++) {
            let stop = me.all_stops[i];

            if (stop['short'] == param_stop_short) {
                return stop;
            }
        }
    }

    // Get all stop infos. FMRGJ-KR
    public get_all_stops() {
        let me = this;

        let stops_url = me._mainService.URLS.retrieve_all_stops_url; 
        this._httpService.sendGetRequestWithParams(stops_url)
            .subscribe(
                data => {
                    let temp = [];
                    for (let i=0; i<Object.keys(data['data']).length; i++) {
                        let item = data['data'][i];
                        temp.push(item);
                    } 

                    me.all_stops = temp; 
                }
            );
    }   

}
