import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLSearchParams, RequestOptions } from '@angular/http';

import { HttpService } from "../../services/http_service/http.service";
import { AuthService } from "../../services/auth_service/auth.service";

import { AdminComponent } from '../../admin';
import { BACKEND_SERVER_URL } from '../../config/config';

declare var jQuery: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

    public name: string = "";
    public password: string = "";
    public alert_visible: string = "none";
    public errorMsg = "Log in fail!";


    constructor(public _httpService: HttpService,
        public _authService: AuthService,
        public router: Router,
        public route: ActivatedRoute
    ) {

    }

    ngOnInit() {
    }

    onPostLogin() {
        let url = this._authService.URLS.login;

        let formParams = new URLSearchParams();
        formParams.set('email', this.name);
        formParams.set('password', this.password);

        this._authService.removeCurrentUser();
        this._httpService.sendPostRequestWithParams(url, formParams)
            .subscribe(
            data => {
                console.log(data);
                if (data.success) {
                    this._authService.validateLogin();
                } else {
                    this.errorMsg = data.error;
                    this.alert_visible = "inherit";
                }
            },
            error => {
                this.errorMsg = "Authentication failed!";
                this.alert_visible = "inherit";
            }
            );
    }

}
