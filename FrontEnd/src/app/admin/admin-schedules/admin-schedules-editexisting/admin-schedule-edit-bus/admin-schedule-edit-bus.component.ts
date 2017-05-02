import { Component, OnInit, Input } from '@angular/core';

import {HttpService} from "../../../../services/http_service/http.service";
import {ScheduleService} from "../../../../services/schedule_service/schedule.service";

import { BACKEND_SERVER_URL } from '../../../../config/config';

declare var jQuery:any;

@Component({
  selector: 'app-admin-schedule-edit-bus',
  templateUrl: './admin-schedule-edit-bus.component.html',
  styleUrls: ['./admin-schedule-edit-bus.component.css']
})
export class AdminScheduleEditBusComponent implements OnInit {
    public arr_stops: string[] = [];
    public arr_hours: any[] = [];
    public arr_mins: number[] = [];
    
    public selected_group: any[] = [];
    public selected_group_additional_info: any[] = [];

    public selected_group_idx: number;
    public selected_group_disabled: boolean;
    public selected_group_area_id: number;
    public selected_group_max_capacity: number;
    public selected_group_dest_stops: any[] = [];
    public selected_group_available_dest_stops: any[] = [];

    public selected_stops: string[] = [];
    public selected_hours: string[] = [];
    public selected_mins: string[] = [];
    
    public isDisabled: boolean = false;
    public isHidden: boolean = false;
    
    public urls: any = {
        update_url: BACKEND_SERVER_URL + "api/admin/schedule/update_existing_schedule",
        remove_url: BACKEND_SERVER_URL + "api/admin/schedule/remove_existing_schedule",
        disable_url: BACKEND_SERVER_URL + "api/admin/schedule/disable_existing_schedule",
        get_group_info_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_group_info",
        get_stop_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stop_from_id",
        get_all_stop_for_area_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stops_for_area",
        get_dest_stops_for_group: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_dest_stops_for_group",
    };
    
    constructor(public _httpService: HttpService,
                public _scheduleService: ScheduleService
                ) { 
    }

    ngOnInit() { 
        this.structTimeArray();
        this.initiateFields();
        this.checkGroupDisability();
    }

    public getMaxCapOfGroup() {
        let me = this;

        // Get group_id.
        let groupId = me.selected_group[0]['group_id'];

        if (groupId == undefined) {
                me.selected_group_max_capacity = me._scheduleService.groupMaxCapacity;
                me.selected_group_additional_info['max_capacity'] = me.selected_group_max_capacity; 
        } else {
                let groupURL = me.urls.get_group_info_url + "?group_id=" + groupId; 
                
                me._httpService.sendGetRequestWithParams(groupURL)
                    .subscribe(
                        data => {
                            if (data['state'] == 'success') {
                                let groupInfo = data['data']; 

                                me.selected_group_max_capacity = groupInfo['max_cap'];
                                me.selected_group_additional_info['max_capacity'] = me.selected_group_max_capacity; 
                            }
                        },
                        error => alert(error),
                        () => {}
                    );
        }
        
    }
    
    // Get destination stops for this group. 
    public getDestStopsForGroup() {
        let me = this; 
        
        let url;
        if (me.selected_group_area_id == me._scheduleService.areaType.TYPE_NEWYORK) {
            url = me.urls.get_all_stop_for_area_url + "?area_id=" + me._scheduleService.areaType.TYPE_BA;
        } else {
            url = me.urls.get_all_stop_for_area_url + "?area_id=" + me._scheduleService.areaType.TYPE_NEWYORK;
        }

        // Get all stops can be used as destination stops. 
        me._httpService.sendGetRequestWithParams(url)
            .subscribe(
                data => { 
                    if (data['state'] == 'success') {
                        me.selected_group_available_dest_stops = data['data']; 

                        // Get group_id.
                        let groupId = me.selected_group[0]['group_id']; 
                        
                        // Get dest stop id.
                        if (groupId == undefined) { // If newly added group
                                for (let i=0; i<Object.keys(me.selected_group_available_dest_stops).length; i++) {
                                    let temp = {};
                                    let item = me.selected_group_available_dest_stops[i];

                                    temp['stop_id'] = item['id'];
                                    temp['stop_short'] = item['short']; 

                                    if (item['default_dropoff'] == me._scheduleService.stopDropOffType.TYPE_DROPOFF) {
                                        temp['is_dest_stop'] = 'yes';
                                    } else {
                                        temp['is_dest_stop'] = 'no';
                                    }

                                    me.selected_group_dest_stops.push(temp);
                                }

                                me.extract_DestStopInfos();

                        } else {  // If existing group
                                let url = me.urls.get_dest_stops_for_group + "?group_id=" + groupId; 
                                
                                me._httpService.sendGetRequestWithParams(url)
                                    .subscribe(
                                        data => {
                                            if (data['state'] == 'success') {
                                                let destStops = data['data']; 
                                                
                                                for (let i=0; i<Object.keys(destStops).length; i++) {
                                                    let item = destStops[i];
                                                    
                                                    let temp = {};
                                                    temp['stop_id'] = item['dest_stop_id'];
                                                    temp['stop_short'] = me.get_StopInfo_From_StopID(item['dest_stop_id'])['short'];
                                                    temp['is_dest_stop'] = 'yes';

                                                    me.selected_group_dest_stops.push(temp);
                                                }

                                                for (let i=0; i<Object.keys(me.selected_group_available_dest_stops).length; i++) {
                                                    let item = me.selected_group_available_dest_stops[i];

                                                    let isExisting = 0;
                                                    for (let j=0; j<Object.keys(destStops).length; j++) {
                                                        if (item['id'] == destStops[j]['dest_stop_id']) {
                                                            isExisting = 1;
                                                            break;
                                                        }
                                                    }

                                                    if (isExisting == 0) {
                                                        let temp = {};

                                                        temp['stop_id'] = item['id'];
                                                        temp['stop_short'] = item['short'];

                                                        if (item['default_dropoff'] == me._scheduleService.stopDropOffType.TYPE_DROPOFF) {
                                                            temp['is_dest_stop'] = 'yes';
                                                        } else {
                                                            temp['is_dest_stop'] = 'no';
                                                        }

                                                        me.selected_group_dest_stops.push(temp);
                                                    }
                                                    
                                                }

                                                me.extract_DestStopInfos();
                                                
                                            } else {
                                                for (let i=0; i<Object.keys(me.selected_group_available_dest_stops).length; i++) {
                                                    let item = me.selected_group_available_dest_stops[i];
                                                    let temp = {};

                                                    temp['stop_id'] = item['id'];
                                                    temp['stop_short'] = item['short'];

                                                    if (item['default_dropoff'] == me._scheduleService.stopDropOffType.TYPE_DROPOFF) {
                                                        temp['is_dest_stop'] = 'yes';
                                                    } else {
                                                        temp['is_dest_stop'] = 'no';
                                                    }

                                                    me.selected_group_dest_stops.push(temp);
                                                    
                                                }

                                                me.extract_DestStopInfos();
                                            }
                                        },
                                        error => alert(error),
                                        () => {}
                                    );
                        }
                    }
                },
                error => alert(error),
                () => {}
            );
        
    }

    public get_StopInfo_From_StopID(param_stopID) {
        let me = this;

        let response = {};
        let destStop;
        for (let i=0; i<Object.keys(me.selected_group_available_dest_stops).length; i++) {
            destStop = me.selected_group_available_dest_stops[i];

            if (destStop['id'] == param_stopID) {
                break;
            }
        }

        return destStop;
    }

    public extract_DestStopInfos() {
        let me = this;

        me.selected_group_additional_info['dest_stops'] = [];

        for (let i=0; i<Object.keys(me.selected_group_dest_stops).length; i++) {
            let item = me.selected_group_dest_stops[i];

            if (item['is_dest_stop'] == 'yes') {
                let temp = {};

                temp['stop_id'] = item['stop_id'];
                temp['stop_short'] = item['stop_short'];

                me.selected_group_additional_info['dest_stops'].push(temp);

            }
        }
    }
    
    public getClass() {
        if(this.selected_group_disabled) {
            return "alert-disabled";
        } else {
            return "alert-enabled";
        }
    }
    
    public checkGroupDisability() {
        let me = this;
        
        if (me.selected_group[0]['open'] == me._scheduleService.scheduleDisabilty.TYPE_DISABLED) {
            me.selected_group_disabled = true;
        } else {
            me.selected_group_disabled = false;
        } 
    }
    
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
    }
    
    public initiateFields() {
        let me = this; 

        // Set max capcity of this group.
        me.selected_group_max_capacity = me._scheduleService.groupMaxCapacity;
        me.selected_group_additional_info['max_capacity'] = me.selected_group_max_capacity;
        
        for (let i=0; i<Object.keys(me.selected_group).length; i++) {
            let item = me.selected_group[i]; 
            me.selected_stops[i] = item['stop_area'];
            me.selected_hours[i] = item['time'].substring(0, 2);
            me.selected_mins[i] = item['time'].substring(3, 5); 
        } 

        // Get destination stops of this group.        
        me.getDestStopsForGroup(); 

        // Get max cap of this group.
        me.getMaxCapOfGroup();
        
    }

    @Input()
    set stops(param_stops: string[]) {
        this.arr_stops = param_stops; 
    }
    
    @Input()
    set group(param_group: any[]) {
        this.selected_group = param_group; 
    }
    
    @Input()
    set group_idx(param_group_idx: number) {
        this.selected_group_idx = param_group_idx; 
    }
    
    @Input()
    set outbound_area_id(param_area_id: number) {
        this.selected_group_area_id = param_area_id; 
    }
    
    @Input()
    set group_additional_info(param_additional_info: any[]) {
        let me = this;
        
        me.selected_group_additional_info = param_additional_info; 
        me.selected_group_additional_info['group_id'] = me.selected_group[0]['group_id']; 
    }
    
    public onRemove() {
        let me = this;
        
        let remove_request = [];
        for (let i=0; i<Object.keys(me.selected_group).length; i++) {
            let group_item = me.selected_group[i];
            
            let temp = {};
            temp['time_id'] = group_item['time_id'];
            
            remove_request[i] = temp;
        } 
        
        this._httpService.sendPostJSON(me.urls.remove_url, remove_request)
            .subscribe(
                data => {
                    me.isHidden = true; 
                },
                error => alert(error),
                () => {}
            );
    }
    
    public onDisable() {
        let me = this;
        
        let disable_request = []; 
        for (let i=0; i<Object.keys(me.selected_group).length; i++) {
            let group_item = me.selected_group[i];
            
            let temp = {};
            temp['time_id'] = group_item['time_id'];
            
            disable_request[i] = temp;
        } 
        
        this._httpService.sendPostJSON(me.urls.disable_url, disable_request)
            .subscribe(
                data => {
                    me.isDisabled = true;
                    me.selected_group_disabled = true;
                },
                error => alert(error),
                () => {}
            );
        
    }
    
    public onReenable() {
        let me = this;
        
        let reenable_request = []; 
        for (let i=0; i<Object.keys(me.selected_group).length; i++) {
            let group_item = me.selected_group[i];
            
            let temp = {};
            temp['time_id'] = group_item['time_id'];
            temp['isEnabled'] = me._scheduleService.scheduleDisabilty.TYPE_ENABLED;
            
            reenable_request[i] = temp;
        } 
        
        this._httpService.sendPostJSON(me.urls.disable_url, reenable_request)
            .subscribe(
                data => {
                    me.isDisabled = false;
                    me.selected_group_disabled = false;
                },
                error => alert(error),
                () => {}
            );
    }
    
    public onChangeStopsSelect($event, idx) {
        let me = this;
        me.selected_group[idx]['stop_area'] = $event;
    }
    
    public onChangeHoursSelect($event, idx) {
        let me = this;
        
        let temp;
        temp = $event + ":" + me.selected_group[idx]['time'].substring(3);
        
        me.selected_group[idx]['time'] = temp;
    }
    
    public onChangeMinsSelect($event, idx) {
        let me = this;
        
        let temp;
        temp = me.selected_group[idx]['time'].substring(0, 2) + ":" + $event + ":" + me.selected_group[idx]['time'].substring(6);
        
        me.selected_group[idx]['time'] = temp;
    }
    
    public onChangeMaxCapacity($event) {
        let me = this;
        
        me.selected_group_additional_info['max_capacity'] = $event; 
    }

    public onChangeDestinationCheckBox($event) { 
        let me = this;
        let stop_state = $event.target.checked;
        let stop_id = $event.target.getAttribute('value');
        
        for (let i=0; i<Object.keys(me.selected_group_dest_stops).length; i++) {
            let item = me.selected_group_dest_stops[i];

            if (item['stop_id'] == stop_id) {
                if (stop_state == false) {
                    item['is_dest_stop'] = 'no';
                } else {
                    item['is_dest_stop'] = 'yes';
                }
            }
        }

        me.extract_DestStopInfos(); 
    }

}
