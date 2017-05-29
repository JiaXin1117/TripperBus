import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ScheduleService} from "../../../services/schedule_service/schedule.service";
import {HttpService} from "../../../services/http_service/http.service";

import { BACKEND_SERVER_URL } from '../../../config/config';

declare var jQuery:any;

@Component({
  selector: 'app-admin-schedules-gennew',
  templateUrl: './admin-schedules-gennew.component.html',
  styleUrls: ['./admin-schedules-gennew.component.css']
})
export class AdminSchedulesGennewComponent implements OnInit {

    public sel_date: string = "";
    public selected_dow: string = "";
    public selected_schedule_type: string = "";
    public selected_date_from: string = "";
    public selected_stop: string = "";
    
    public urls: any = {
        retrieve_schedule_by_date_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_by_date",
        retrieve_all_stops_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stops",
        save_all_url: BACKEND_SERVER_URL + "api/admin/schedule/saveall_existing_schedule",    
        add_schedule_url: BACKEND_SERVER_URL + "api/admin/schedule/add_existing_schedule",    
    };
    
    public groups: any[] = [];
    public arr_dest_stops: string[] = [];
    
    public adding_stops: string[] = [];
    public adding_hours: string[] = [];
    public adding_mins: string[] = [];
    public adding_prices: string[] = [];
    
    public arr_leaving_stop_shorts: string[] = [];
    public arr_hours: number[] = [];
    public arr_mins: number[] = [];
    public arr_prices: string[] = [];

        
    constructor(public _route: ActivatedRoute, 
                public _scheduleService: ScheduleService, 
                public _httpService: HttpService ) { 
    }

    ngOnInit() {
        this.receiveParamsFromRoute();
        this.structTimeArray();
        this.getAllStopsInfo();
        this.showHeaderInfos();
    }

    public showModal() {
        jQuery("#gen_new_schedule_modal").modal('show');
    }
    
    public hideModal() {
        jQuery("#gen_new_schedule_modal").modal('hide');
    }
    
    public receiveParamsFromRoute() {
            this.sel_date = this._route.snapshot.params['sel_date']; 
    }
    
    public structTimeArray() {
        let me = this;
        
        for (let i=0; i<24; i++) {
            let temp;
            if (i < 10) {
                temp = "0" + i;
            } else {
                temp = i;
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
        for (let i=0; i<3; i++) {
            me.adding_stops[i] = "";
            me.adding_hours[i] = "";
            me.adding_mins[i] = "";
            me.adding_prices[i] = "";
        }
    }
    
    public getAllStopsInfo() {
        let me = this;
        let stops_url = this.urls.retrieve_all_stops_url; 
        
        this._httpService.sendGetRequestWithParams(stops_url)
            .subscribe(
                data => {
                    me.arr_leaving_stop_shorts = data['data']; 
                }
            );
    }
    
    public showHeaderInfos() {
            let me = this;
            
            let stops_url = this.urls.retrieve_all_stops_url; 
            this._httpService.sendGetRequestWithParams(stops_url)
                .subscribe(
                    data => {
                        me.arr_dest_stops = data['data']; 
                        
                        let url = this.urls.retrieve_schedule_by_date_url + "?date=" + me.sel_date; 
                        this._httpService.sendGetRequestWithParams(url)
                            .subscribe(
                                data => { 
                                    let response = data; 
                                    if (response['state'] == 'success') { 
                                        //********  Show header infos ************
                                        let data = response['data'][0]; console.log(data);

                                        this.selected_dow = this._scheduleService.convertDayOfWeekFormat(data['dow']);

                                        if (data['schedule_type'] == 1) {
                                            this.selected_schedule_type = 'after'; 
                                        } else {
                                            this.selected_schedule_type = 'on'; 
                                        }

                                        this.selected_date_from = data['from_date'];
                                        this.selected_stop = data['stop_area'];
                                        //********  Show header infos ended ***********

                                        //*********  Edit informations ***********
                                        let group_ids = [];
                                        for (let i=0; i<Object.keys(response['data']).length; i++) {
                                            let item = response['data'][i]; 
                                            if (group_ids.indexOf(item['group_id']) == -1) {
                                                group_ids.push(item['group_id']);
                                            }
                                        } 

                                        let idx = 0, grouped_items = [];
                                        for (let i=0;  i<Object.keys(group_ids).length; i++) {
                                            grouped_items[idx] = [];
                                            for (let j=0; j<Object.keys(response['data']).length; j++) {
                                                let item = response['data'][j]; 
                                                if (group_ids[i] == item['group_id']) {
                                                    grouped_items[idx].push(item);
                                                }
                                            }
                                            idx++;
                                        } 

                                        me.groups = grouped_items;
                                        
                                        this.showModal();

                                    } 
                                }
                            );
                    }
                );
            
    }
    
    public onAddSchedule() {
        let me = this;
        
        let insert_request = [];
        for (let i=0; i<Object.keys(me.adding_stops).length; i++) {
            if (me.adding_stops[i] != "" && me.adding_hours[i] != "" && me.adding_mins[i] != "" && me.adding_prices[i] != "") {
                let temp = {};
                temp['stop'] = me.adding_stops[i];
                temp['hour'] = me.adding_hours[i];
                temp['min'] = me.adding_mins[i];
                temp['date_from'] = me.sel_date;
                temp['dow'] = me._scheduleService.convertWeekToNumber(me.selected_dow);

                insert_request[i] = temp;
            }
            
        } 
        
        this._httpService.sendPostJSON(me.urls.add_schedule_url, insert_request)
            .subscribe(
                data => {
                    window.location.reload();
                },
                error => alert(error),
                () => console.log('Finished')
            ); 
            
        me.hideModal();
    }
    
    public onSaveAll() { 
        let me = this; 
        
        this._httpService.sendPostJSON(me.urls.save_all_url, me.groups)
            .subscribe(
                data => {
                    jQuery("#confirm_saveall_modal").modal('hide');
                },
                error => alert(error),
                () => console.log('Finished')
            );
    }

}
