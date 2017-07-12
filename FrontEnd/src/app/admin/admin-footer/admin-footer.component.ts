import { Component, OnInit, HostListener } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'app-admin-footer',
    templateUrl: './admin-footer.component.html',
    styleUrls: ['./admin-footer.component.css']
})

export class AdminFooterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        jQuery(".footer-main").css("bottom", "0px");
    }

}
