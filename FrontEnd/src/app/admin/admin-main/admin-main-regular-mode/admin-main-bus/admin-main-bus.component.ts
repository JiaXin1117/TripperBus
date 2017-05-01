import { Component, OnInit, Input } from '@angular/core';

import {HttpService} from "../../../../services/http_service/http.service";
import {ScheduleService} from "../../../../services/schedule_service/schedule.service";
import {MainService} from "../../../../services/main_service/main.service";

import { BACKEND_SERVER_URL } from '../../../../config/config';

declare var jQuery:any;

@Component({
  selector: 'app-admin-main-bus',
  templateUrl: './admin-main-bus.component.html',
  styleUrls: ['./admin-main-bus.component.css']
})
export class AdminMainBusComponent implements OnInit {

    protected group_main_info: any[] = [];
    protected group_additional_info: any[] = [];
    protected group_idx: number;

    protected group_total_reservations: number = 0;
    protected group_price: number;

    constructor(private _httpService: HttpService,
                private _scheduleService: ScheduleService,
                private _mainService: MainService) { 
    }

    ngOnInit() {
        let me = this;

        me.calculate_total_reservations_cnt();
        me.calculate_price();
    }

    @Input()
    set selected_group_main_info(param_group_main_info: any[]) {
        let me = this;
        me.group_main_info = param_group_main_info; 
    }

    @Input()
    set selected_group_additional_info(param_group_additional_infos: any[]) {
        let me = this;
        me.group_additional_info = param_group_additional_infos; 
    }

    @Input()
    set selected_group_idx(param_group_idx: number) {
        let me = this;
        me.group_idx = param_group_idx; 
    }

    public set_default_price() {
        let me = this;

        me.group_price = me._mainService.schedule_default_price;
    }

    public calculate_total_reservations_cnt() {
        let me = this; 

        for (let i=0; i<Object.keys(me.group_main_info).length; i++) {
            let item = me.group_main_info[i];
            me.group_total_reservations += item['reservation_cnt'];            
        }
    }

    public calculate_price() {
        let me = this; 

        // Get price informations. FMRGJ-KR
        let url = me._mainService.URLS.get_price_for_bus_url + "?group_id=" + me.group_additional_info['group_id']; 
        me._httpService.sendGetRequestWithParams(url)
            .subscribe(
                data => {
                    if (data['state'] == 'success') {
                        let response = data['data'];

                        // Construct price informations.
                        let temp_price_info = [];
                        temp_price_info['first_seats'] = response['first_seats'];
                        temp_price_info['first_price'] = response['first_price'];
                        temp_price_info['last_seats'] = response['last_seats'];
                        temp_price_info['last_price'] = response['last_price']; 

                        // Calculate Price
                        if (me.group_total_reservations < temp_price_info['first_seats']) {
                            me.group_price = temp_price_info['first_price'];
                        } else if (me.group_total_reservations > (me.group_additional_info['group_max_capacity'] - temp_price_info['last_seats'])) {
                            me.group_price = temp_price_info['last_price'];
                        } console.log(me.group_price);

                    }
                }
            );

    }

}
