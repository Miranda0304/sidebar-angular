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

    // Get all routes or path.
    public async getNavigation() {
        this.readToken();
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_data", "sessionID": this.user_token, "data": { "model": "sys_navigation" } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == 'OK') {
                return result.data.map(x => x.path);
            }
        }).catch((err) => {
            if (err.error.message == undefined) {
                this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            } else {
                this.toast.error(err.error.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            }
        });
        return data;
    }

    // Get all menus of navigation.
    public async getNavList() {
        this.readToken();
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_nav", "sessionID": this.user_token, "data": {} };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == 'OK') {
                return result.data.sort((a, b) => a.ordinal - b.ordinal);
            }
        }).catch((err) => {
            if (err.error.message == undefined) {
                this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            } else {
                this.toast.error(err.error.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            }
        });
        return data;
    }

    // Get data 
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
            if (err.error.message == undefined) {
                this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            } else {
                this.toast.error(err.error.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            }
        });
        return data;
    }

    // Get field of forms.
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
            if (err.error.message == undefined) {
                this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            } else {
                this.toast.error(err.error.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            }
        });

        return data;
    }

    // Get tables, headers and data of tables.
    public async getTable(model_name: string, table_name?: string) {
        this.readToken();
        if (model_name == "") return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_data", "sessionID": this.user_token, "data": { "model": model_name, "table_name": table_name} };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.message == "OK" && result.data != null) {
                return result.data
            }
        }).catch((err) => {
            console.log(err);
            if (err.error == undefined) {
                this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            } else {
                this.toast.error(err.error.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            }
        });

        return data;
    }

    public async getSearcher(model_name: string, search?: string) {
        this.readToken();
        if (model_name == "") return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "fib_get_model_search", "sessionID": this.user_token, "data": { "model": model_name, "search": search ,"limit": 10 } };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {

         
                return result;
            
        }).catch((err) => {
            console.log(err);
            if (err.error == undefined) {
                this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            } else {
                this.toast.error(err.error.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            }
        });

        return data;
    }

    // Create or edit data.
    public async upsert(obj_data: {}) {
        this.readToken();
        if (Object.keys(obj_data).length == 0) return;

        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body_data = obj_data;
        const body = { "action": "upsert", "sessionID": this.user_token, "data": body_data };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.message == "OK") {
                return result.data
            }
        }).catch((err) => {
            if (err.error.message == undefined) {
                this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            } else {
                this.toast.error(err.error.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            }
        });

        return data;

    }

    // Get forms and tables in a specific page or view.
    public async getPageContent(path_view: string) {
        this.readToken();
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        const body = { "action": "get_content_menu", "sessionID": this.user_token, "data": {} };

        let data = await this._http.post(URL_IXCHEL, body, { headers }).toPromise().then((result: any) => {
            if (result.data.length > 0 && result.message == 'OK') {
                return result.data.sort((a, b) => a.ordinal - b.ordinal);
            }
        }).catch((err) => {
            if (err.error.message == undefined) {
                this.toast.error(err.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            } else {
                this.toast.error(err.error.message, '', { opacity: 1, timeOut: 3000, positionClass: 'md-toast-top-center' });
            }
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

