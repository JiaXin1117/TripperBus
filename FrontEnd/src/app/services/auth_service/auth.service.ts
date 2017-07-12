import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Http, Response, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';

import { User } from '../../model';
import { BACKEND_SERVER_URL } from '../../config/config';

@Injectable()
export class AuthService implements CanActivate {
    public user = null;

    URLS: any = {
        get_users: BACKEND_SERVER_URL + "api/admin/user/get_users",
        add_user: BACKEND_SERVER_URL + "api/admin/user/add_user",
        update_user: BACKEND_SERVER_URL + "api/admin/user/update_user",
        delete_user: BACKEND_SERVER_URL + "api/admin/user/delete_user",

        login: BACKEND_SERVER_URL + "api/auth/login",
        logout: BACKEND_SERVER_URL + "api/auth/logout",
        get_current_user: BACKEND_SERVER_URL + "api/admin/user/get_current_user",
    };

    ROUTES: any = {
        login: "login"
    };

    addErrorMessage = "Adding Failed.";
    updateErrorMessage = "Updating Failed.";
    deleteErrorMessage = "Deleting failed.";

    isValidating = false;


    constructor(
        public _http: Http,
        public _router: Router
    ) {
        this.validateLogin();
    }

    canActivate() {
        if (this.isLoggedIn())
            return true;
        else {
            if (!this.isValidating) {
                this._router.navigate([this.ROUTES.login]);
            }
            return false;
        }
    }

    isLoggedIn() {
        return this.user;
    }

    getCurrentUser() {
        return this.user;
    }

    setCurrentUser(user) {
        this.user = user;
    }

    removeCurrentUser() {
        this.user = null;
    }

    validateLogin() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.isValidating = true;
        this._http.get(this.URLS.get_current_user)
            .map(res => res.json())
            .subscribe(
            data => {
                this.isValidating = false;
                console.log(data);
                if (data.success && data.user) {
                    this.setCurrentUser(data.user);
                    this._router.navigate(['/admin/main']);
                }
                else {
                    this._router.navigate([this.ROUTES.login]);
                }
            },
            () => {
                this.isValidating = false;
                this._router.navigate([this.ROUTES.login]);
            }
            );
    }

}
