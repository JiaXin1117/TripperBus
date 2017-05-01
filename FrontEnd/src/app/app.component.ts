import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
    }
    
    ngOnInit(): void {
        
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event) { 
        jQuery("html").css('min-height', '100vh');
        jQuery("body").css('min-height', '100vh');
    }
}
