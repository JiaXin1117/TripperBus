import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth_service/auth.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    private _options: any = {
        logInPath: "/login"
    };

    constructor( private _authService: AuthService, private _router: Router ) {
        this.logout();
    }

    ngOnInit() {
    }
    
    logout() {
        localStorage.removeItem('currentUser');
        this._router.navigate([this._options.logInPath]);
    }

}
