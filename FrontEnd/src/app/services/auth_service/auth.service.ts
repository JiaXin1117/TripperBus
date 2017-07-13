import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, Response, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';

import { User } from '../../model';
import { UserPermission } from '../../common';
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

        set_permission: BACKEND_SERVER_URL + "api/admin/user/set_permission",
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

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLoggedIn()) {
            return this.checkPermission(state.url);
        } else {
            if (!this.isValidating) {
                this._router.navigate([this.ROUTES.login]);
            }
            return false;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

    isLoggedIn() {
        return this.user;
    }

    checkPermission(url) {
        switch (true) {
            case /^\/admin\/main\/search_mode[\/.*]?/.test(url):
                return this.getPermission('Search');
            case /^\/admin\/main[\/.*]?/.test(url):
                return this.getPermission('Main');
            case /^\/admin\/schedules[\/.*]?/.test(url):
                return this.getPermission('Schedules');
            case /^\/admin\/users[\/.*]?/.test(url):
                return this.getPermission('Users');
            case /^\/admin\/customers[\/.*]?/.test(url):
                return this.getPermission('Customers');
            case /^\/admin\/settings[\/.*]?/.test(url):
                return this.getPermission('Settings');
            case /^\/admin\/reports[\/.*]?/.test(url):
                return this.getPermission('Reports');
        }

        return false;
    }

    getPermission(path) {
        let permissionId = UserPermission.filter(permission => (permission['name'] == path), path)[0]['id'];

        return (this.user['permission'].indexOf(permissionId) >= 0);
    }

    setCurrentUserPermission(permission) {
        this.user['permission'] = permission;
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
