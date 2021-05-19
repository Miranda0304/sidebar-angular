import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from 'ng-uikit-pro-standard';

const URL_IXCHEL = 'http://rs02.arteaga.mx:3000/rpc/api';

@Injectable({ providedIn: 'root' })

export class IxchelV2Service {

    user_token: string;

    constructor(private _http: HttpClient, private toast: ToastService) {

    }

    public async getNavList(menu_id?) {
        this.readToken();
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_nav", "sessionID": this.user_token, "data": {} };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == 'OK') {
                return result.data.sort((a, b) => a.ordinal - b.ordinal);
            }
        }).catch((err) => {
            this.toast.error(err.message, 'Error al cargar los menus', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });
        return data;
    }

    public async getNavigation() {
        this.readToken();
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_data", "sessionID": this.user_token, "data": { "model": "sys_navigation" } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == 'OK') {
                return result.data.map(x => x.path);
            }
        }).catch((err) => {
            this.toast.error(err.message, 'Error al cargar las rutas', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });
        return data;
    }

    public async getData(model_name: string, data_id?: string) {
        this.readToken();
        if (model_name == "") return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_data", "sessionID": this.user_token, "data": { "model": model_name, "id": data_id } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == "OK") {
                return result.data
            }
        }).catch((err) => {
            this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });
        return data;
    }

    public async getForm(model_name: string, form_name?: string) {
        this.readToken();
        if (model_name == "") return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_data", "sessionID": this.user_token, "data": { "model": model_name, "form_name": form_name } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == "OK") {
                return result.data
            }
        }).catch((err) => {
            this.toast.error(err.message, 'Forms', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });

        return data;
    }

    public async getTable(model_name: string, table_name?: string) {
        this.readToken();
        if (model_name == "") return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_data", "sessionID": this.user_token, "data": { "model": model_name, "table_name": table_name } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == "OK") {
                return result.data
            }
        }).catch((err) => {
            this.toast.error(err.message, 'Tables', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });

        return data;
    }

    public async upsert(model_name: string, obj_data: {}, id_data?: string) {
        this.readToken();
        if (model_name == "") return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body_data = obj_data;
        const body = { "action": "upsert", "sessionID": this.user_token, "data": body_data };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.message == "OK") {
                return result.data
            }
        }).catch((err) => {
            this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
        });

        return data;

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

