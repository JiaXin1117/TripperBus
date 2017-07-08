import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth_service/auth.service";
import { Router, ActivatedRoute } from '@angular/router';
import { BACKEND_SERVER_URL } from '../../config/config';
import { HttpService } from "../../services/http_service/http.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(
        public _authService: AuthService,
        public _httpService: HttpService,
        public _router: Router,
    ) {
        this.logout();
    }

    ngOnInit() {
    }
    
    logout() {
        let url = this._authService.URLS.logout;
        
        this._httpService._http.get(url)
        .subscribe(() =>
            {
                this._authService.removeCurrentUser();
                this._router.navigate([this._authService.ROUTES.login]);
            }
        );
    }

}
