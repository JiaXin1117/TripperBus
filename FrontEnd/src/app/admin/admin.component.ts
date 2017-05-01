import { Component, OnInit, HostListener, AfterViewChecked } from '@angular/core';
import {Observable} from 'rxjs/Rx';

declare var jQuery:any;

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        let timer = Observable.timer(100,1000);
        timer.subscribe(this.setDimensions);
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event) { 
        this.setDimensions();
    }
    
    public setDimensions() {
        jQuery(".admin-left").height(jQuery('.admin-right').height());
    }

}
