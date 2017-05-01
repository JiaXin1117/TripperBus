import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import {MainService} from "../../services/main_service/main.service";
import * as moment from "moment";

declare var jQuery:any;

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

    protected outbound_date: any;
    protected leaving_city: string;
    protected return_date: string;
    protected page_mode: number;

    constructor( private _router: Router 
                , private _mainService: MainService ) {
    }

    ngOnInit() {
        let me = this;
        
        me.initiateVars();
        me.setDatePickers();

    }

    initiateVars() {
        let me = this;
        
        me.leaving_city = "0";
        me.page_mode = me._mainService.pageMode.REGULAR_MODE;
        me.return_date = "";
    }

    setDatePickers() {
        let me = this;
        
        jQuery("#outbound_date").datepicker({
            onSelect: function(dateStr) 
            { 
                let selectedDate = new Date(dateStr); 
                jQuery("#return_date").datepicker("option",{ minDate: selectedDate});
                me.outbound_date = moment(dateStr).format("YYYY-MM-DD"); 
            }
        });
        
        jQuery( "#return_date" ).datepicker({
            onSelect: function(dateStr) {
                me.return_date = moment(dateStr).format("YYYY-MM-DD"); 
            }
        });
    }
    
    onPressGoButton() {
        let me = this; 

        if (me.leaving_city == "0") {
            jQuery("#choose_location_modal").modal("show");
            return;
        }
        
        if (me.outbound_date == undefined) {
            jQuery("#choose_outbound_date_modal").modal("show");
            return;
        }
        
        if (me.page_mode == me._mainService.pageMode.REGULAR_MODE) {
            let link = ['/admin/main/regular_mode', me.outbound_date, me.leaving_city, me.return_date]; 
            me._router.navigate(link);
        } else if (me.page_mode == me._mainService.pageMode.BUS_EDIT_MODE) {
            let link = ['/admin/main/bus_edit_mode', me.outbound_date, me.leaving_city, me.return_date]; 
            me._router.navigate(link);
        } else {
            let link = ['/admin/main/move_people_mode', me.outbound_date, me.leaving_city, me.return_date]; 
            me._router.navigate(link);
        }
    }

}
