import { Component, OnInit, Input } from '@angular/core';

import {HttpService} from "../../../../services/http_service/http.service";
import {ScheduleService} from "../../../../services/schedule_service/schedule.service";
import {MainService} from "../../../../services/main_service/main.service";

import { BACKEND_SERVER_URL } from '../../../../config/config';
import { Bus } from '../../../../model/bus.type';
declare var jQuery:any;

@Component({
  selector: 'app-admin-main-bus-editor',
  templateUrl: './admin-main-bus-editor.component.html',
  styleUrls: ['./admin-main-bus-editor.component.css']
})
export class AdminMainBusEditorComponent implements OnInit {

    public _bus: Bus = new Bus();
    public group_idx: number = 0;
    public total_reservation: number = 0;

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
        for(let i = 0; i < this._bus.times.length; i++)
            this.total_reservation += this._bus.times[i].reservation_cnt;
    }

    @Input()
    set selected_group_idx(param_group_idx: number) {
        let me = this;
        me.group_idx = param_group_idx; 
    }

    get price(): number{
        let price = 0;
        if(this._bus.price.first_seats > 0 && this.total_reservation <= this._bus.price.first_seats)
            price = this._bus.price.first_price;
        else if(this.total_reservation < this._bus.price.last_seats)
            price = this._bus.price.special_price;
        else
            price = this._bus.price.last_price;
        return price;
    }
}
