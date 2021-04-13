import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { ToastService } from 'ng-uikit-pro-standard';

const URL_IXCHEL = 'http://rs02.arteaga.mx:3000/rpc/api';

@Injectable({ providedIn: 'root' })

export class IxchelV2Service {

    userToken: string;

    constructor(private _http: HttpClient, private toast: ToastService) {
        this.readToken();
    }

    public async login(user: any) {
        // "user": "admin", "password": "d3698036132b78ae31c3f03d377758d8"
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "login", "data": { "user": user.username, "password": user.password } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).pipe(map((response: any) => { return response })).toPromise();

        if (data.message == 'OK') {
            setTimeout(
                () => this.toast.success("Bienvenido", '', { opacity: 1 })
            );
        } else {
            setTimeout(
                () => this.toast.warning(data.message, '', { opacity: 1 })
            );
        }

        this.saveUserData(data, user.password);

        return data;
    }

    public async logout() {
        let username = localStorage.getItem('user');
        let password = localStorage.getItem('password');

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "logout", "data": { "user": username, "password": password } };

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('password');

        let data = await this._http.post(URL_IXCHEL, body, { headers }).pipe(map((response: any) => { return response })).toPromise();

        return data;
    }

    private saveUserData(user: any, password: string) {
        this.userToken = user.data[0].id;
        localStorage.setItem('token', user.data[0].id);
        localStorage.setItem('user', user.data[0].name);
        localStorage.setItem('password', password);

        let expireDate = new Date();
        expireDate.setSeconds(3600);
        localStorage.setItem('expireAt', expireDate.getTime().toString());
    }

    readToken() {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token')
        } else {
            this.userToken = "";
        }

        return this.userToken;
    }

    isAuthenticated(): boolean {
        if (this.userToken == "") {
            return false;
        }

        const expireAt = Number(localStorage.getItem('expireAt'));
        const actualDate = new Date();

        actualDate.setTime(expireAt);

        if (actualDate > new Date()) {
            return true;
        } else {
            return false;
        }
    }

    public async getNavList(): Promise<Observable<any>> {
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        //sessionID se reemplazara por el id generado por la respuesta del login.
        const body = { "action": "get_nav", "sessionID": "a8cf6785-8680-4daf-8000-8ccf1d885cff", "data": {} };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).pipe(map((response: any) => { return response })).toPromise();
        console.log("### GetNav ###");
        console.log(data);
        return data.data
    }

    public async getData(name_model: string) {
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        //sessionID se reemplazara por el id generado por la respuesta del login.
        const body = { "action": "get_data", "sessionID": "a8cf6785-8680-4daf-8000-8ccf1d885cff", "data": { "model": name_model } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).pipe(map((response: any) => { return response })).toPromise();
        console.log("### GetData ###");
        console.log(`Model: ${name_model}`);
        console.log(data);
        return data.data
    }

}