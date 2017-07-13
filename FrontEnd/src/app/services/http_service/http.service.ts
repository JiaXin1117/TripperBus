import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(
        public _http: Http,
        public _router: Router,
        public _location: Location,
    ) {
    }

    public sendPostRequestWithParams(url, params) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(url, params, { headers: headers })
            .map(res => res.json())
            .catch(this.handleServerError.bind(this));
    }

    public sendGetRequestWithParams(url) {
        return this._http.get(url)
            .map(res => res.json())
            .catch(this.handleServerError.bind(this));
    }

    public sendPostJSON(url, json_data) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http.post(url, JSON.stringify(json_data), { headers: headers })
            .map(res => res.json())
            .catch(this.handleServerError.bind(this));
    }

    public handleServerError(error: Response) {
        let jError = error.json() && error.json()['error'];
        if (jError == 'Unauthenticated.') {
            alert("You are not unauthenticated. Please login correctly!");
            this._router.navigate(['login']);
            return;
        } else if (jError == "You don't have permission!") {
            alert("You don't have permission!");
            this._location.back();
            return;
        }

        return Observable.throw(error.json() || 'Server error'); // Observable.throw() is undefined at runtime using Webpack
    }

}
