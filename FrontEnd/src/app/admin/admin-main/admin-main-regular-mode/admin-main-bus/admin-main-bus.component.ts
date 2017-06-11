import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {HttpService} from "../../../../services/http_service/http.service";
import {ScheduleService} from "../../../../services/schedule_service/schedule.service";
import {MainService} from "../../../../services/main_service/main.service";

import { BACKEND_SERVER_URL } from '../../../../config/config';
import { Bus } from '../../../../model/bus.type';
declare var jQuery:any;

@Component({
  selector: 'app-admin-main-bus',
  templateUrl: './admin-main-bus.component.html',
  styleUrls: ['./admin-main-bus.component.css']
})
export class AdminMainBusComponent implements OnInit {
    @Output() onTimeSelected = new EventEmitter<any>();
    public _bus: Bus = new Bus();
    public group_idx: number = 0;
    public total_reservation: number = 0;
    public price: number = 0;
    public _busType: number = 0;
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
        this.price = this._mainService.settings['Default Price'];;
        if(this._bus.price.first_seats > 0 && this._bus.price.first_price > 0 && this.total_reservation <= this._bus.price.first_seats)
            this.price = this._bus.price.first_price;
        else if(this._bus.price.last_price > 0 && this.total_reservation >= this._bus.max_cap - this._bus.price.last_seats)
            this.price = this._bus.price.last_price;
        else if(this._bus.price.special_price > 0)
            this.price = this._bus.price.special_price;
    }

    @Input()
    set busType(type){
        this._busType = type;
    }

    @Input()
    set selected_group_idx(param_group_idx: number) {
        let me = this;
        me.group_idx = param_group_idx; 
    }

    timeSelected(timeId){
        this.onTimeSelected.emit({groupId: this._bus.group_id, timeId: timeId, price: this.price});
    }
}
