import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

    private _options: any = {
        logInPath: "\login"
    };

    constructor( private _router: Router ) {
        
    }
    
    canActivate() {
        if (localStorage.getItem('currentUser'))
            return true;
        else {
            this._router.navigate([this._options.logInPath]);
            return false;
        }
    }

}
