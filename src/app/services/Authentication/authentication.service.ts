import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ToastService } from 'ng-uikit-pro-standard';
import { Md5 } from 'ts-md5/dist/md5';

const URL_IXCHEL = 'http://rs02.arteaga.mx:3000/rpc/api';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    user_token: string;

    constructor(private _http: HttpClient, private toast: ToastService) {
        this.readToken();
    }

    public async login(user: any) {
        // "user": "admin", "password": "d3698036132b78ae31c3f03d377758d8" // adminnew
        const encrypt_password = new Md5().appendStr(user.password).end();
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "login", "data": { "user": user.username, "password": encrypt_password } };

        //let data = login_json;
        //console.log(data);
        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.message == 'OK') {
                this.toast.success(`Bienvenido ${user.username}`, '', { opacity: 1, timeOut: 2000, positionClass: 'md-toast-top-center' });
                this.saveUserData(result, user.password);
            } else {
                this.toast.warning(result.message, '', { opacity: 1, timeOut: 2000, positionClass: 'md-toast-top-center' });
            }
        }).catch((err) => {
            console.log(err);
            this.toast.error(err.message, 'CONTACTE AL ADMINISTRADOR', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });

        
        return data;
    }

    public async logout() {
        let username = localStorage.getItem('user');
        const encrypt_password = new Md5().appendStr(localStorage.getItem('password')).end();
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "logout", "data": { "user": username, "password": encrypt_password } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.message == 'OK') {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('password');
                localStorage.removeItem('rol');
                window.location.reload();
            }
        }).catch((err) => {
            this.toast.error(err.message, 'CONTACTE AL ADMINISTRADOR', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });
        return data;
    }

    private saveUserData(user: any, password: string) {
        this.user_token = user.data[0].id;
        localStorage.setItem('token', user.data[0].id);
        localStorage.setItem('user', user.data[0].name);
        localStorage.setItem('password', password);
        localStorage.setItem('rol', user.data[0].role);

        //Date of expiration
        let expireDate = new Date();
        expireDate.setSeconds(3600 * 8); //3600 una hora.
        localStorage.setItem('expireAt', expireDate.getTime().toString());
    }

    readToken() {
        if (localStorage.getItem('token')) {
            this.user_token = localStorage.getItem('token');
        } else {
            this.user_token = "";
        }

        return this.user_token;
    }

    isAuthenticated(): boolean {

        if (this.user_token == "") {
            return false;
        }

        const expireAt = Number(localStorage.getItem('expireAt'));
        const current_date = new Date();
        current_date.setTime(expireAt);

        if (current_date > new Date()) {
            return true;
        } else {
            return false;
        }
    }

}