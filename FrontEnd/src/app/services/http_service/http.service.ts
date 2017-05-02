import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor( public _http: Http ) { 
    }
    
    public sendPostRequestWithParams(url, params) {
        let headers = new Headers(); 
        headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
        
        return this._http.post(url, params, {
                    headers: headers
                }).map(res => res.json());
    }
    
    public sendGetRequestWithParams(url) {
        return this._http.get(url)
                    .map(res => res.json());
    }
    
    public sendPostJSON(url, json_data) {
        let headers = new Headers({
                        'Content-Type': 'application/json'
                      });
        return this._http.post(url, JSON.stringify(json_data), {headers: headers});
    }

}
