import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http_service/http.service";
import {AuthService} from "../../services/auth_service/auth.service";
import { Router, ActivatedRoute } from '@angular/router';
import { AdminComponent } from '../../admin';
import { BACKEND_SERVER_URL } from '../../config/config';
import { URLSearchParams } from '@angular/http';

declare var jQuery:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    
    public email: string = "";
    public password: string = "";
    public alert_visible: string = "none";
    public errorMsg = "Log in fail!";

    constructor( public _httpService: HttpService, public _authService: AuthService, public router: Router, 
                public route: ActivatedRoute ) {
        
    }

    ngOnInit() {
    }
    
    onPostLogin() { 
        let url = BACKEND_SERVER_URL + "api/auth/login";
        
        let formParams = new URLSearchParams();
        formParams.set('email', this.email);
        formParams.set('password', this.password);
        
        let userInfo = {};
        userInfo['email'] = this.email;
        userInfo['password'] = this.password;
        
        this._httpService.sendPostRequestWithParams(url, formParams.toString())
            .subscribe(
                data => {
                    console.log(data);
                    if (data.success) {
                        this.alert_visible = "none";
                        localStorage.setItem("currentUser", JSON.stringify(data.data));
                        this.router.navigate(['/admin/main']);
                    } else {
                        this.errorMsg = data.error;
                        this.alert_visible = "inherit";
                        localStorage.removeItem("currentUser");
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => console.log('Finished')
            );
    }

}
