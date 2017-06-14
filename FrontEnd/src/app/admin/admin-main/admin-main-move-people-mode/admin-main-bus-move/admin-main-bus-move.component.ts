import { Component, OnInit, Input } from '@angular/core';

import {HttpService} from "../../../../services/http_service/http.service";
import {ScheduleService} from "../../../../services/schedule_service/schedule.service";
import {MainService} from "../../../../services/main_service/main.service";

import { BACKEND_SERVER_URL } from '../../../../config/config';
import { Bus, Time } from '../../../../model';
declare var jQuery:any;

@Component({
  selector: 'app-admin-main-bus-move',
  templateUrl: './admin-main-bus-move.component.html',
  styleUrls: ['./admin-main-bus-move.component.css']
})
export class AdminMainBusMoveComponent implements OnInit {

    public _bus: Bus = new Bus();
    public group_idx: number = 0;
    public total_reservation: number = 0;
    public _times: Time[];
    public price: number = 0;
    constructor(public _httpService: HttpService,
                public _scheduleService: ScheduleService,
                public _mainService: MainService) { 
    }

    ngOnInit() {
        let me = this;
    }

    @Input()
    set bus(bus: Bus) {
        let me = this;
        me._bus = bus; 
        this.total_reservation = 0;
        for(let i = 0; i < this._bus.times.length; i++){
            this._bus.times[i]['note_change'] = 1;
            this._bus.times[i]['email_reason'] = 1;
            if(this._bus.times[i].reservation_cnt == null)
                this._bus.times[i].reservation_cnt = 0;
            this.total_reservation += this._bus.times[i].reservation_cnt;
        }
        this.price = this._mainService.settings['default_price'];;
        if(this._bus.price.first_seats > 0 && this._bus.price.first_price > 0 && this.total_reservation <= this._bus.price.first_seats)
            this.price = this._bus.price.first_price;
        else if(this._bus.price.last_price > 0 && this.total_reservation >= this._bus.max_cap - this._bus.price.last_seats)
            this.price = this._bus.price.last_price;
        else if(this._bus.price.special_price > 0)
            this.price = this._bus.price.special_price;
    }

    @Input()
    set times(times: Time[]){
        this._times = times;
    }

    @Input()
    set selected_group_idx(param_group_idx: number) {
        let me = this;
        me.group_idx = param_group_idx; 
    }
}
