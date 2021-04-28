import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ToastService } from 'ng-uikit-pro-standard';

const URL_IXCHEL = 'http://rs02.arteaga.mx:3000/rpc/api';

@Injectable({ providedIn: 'root' })

export class IxchelV2Service {

    user_token: string;

    constructor(private _http: HttpClient, private toast: ToastService) {

    }

    public async getNavList() {
        this.readToken();
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_nav", "sessionID": this.user_token, "data": {} };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == 'OK') {
                return result.data;
            }
        }).catch((err) => {
            this.toast.error(err.message, 'Error al cargar los menus', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });

        return data;
    }

    public async getData(name_model: string) {
        this.readToken();
        if (name_model == "") return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_data", "sessionID": this.user_token, "data": { "model": name_model } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            console.log("### GetData ###");
            console.log(`Model: ${name_model}`, result);

            if (result.data.length > 0 && result.message == "OK") {
                return result.data
            }
        }).catch((err) => {
            this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });

        return data;
    }

    public async upsert(name_model: string, obj_data: {}) {
        this.readToken();
        if (name_model == "") return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "upsert", "sessionID": this.user_token, "data": { "model": name_model } };

        // let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
        //     console.log("### GetData ###");
        //     console.log(`Model: ${name_model}`, result);

        //     if (result.data.length > 0 && result.message == "OK") {
        //         return result.data
        //     }
        // }).catch((err) => {
        //     this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        // });

        // return data;

    }

    readToken() {
        if (localStorage.getItem('token')) {
            this.user_token = localStorage.getItem('token');
        } else {
            this.user_token = "";
        }
        return this.user_token;
    }

}