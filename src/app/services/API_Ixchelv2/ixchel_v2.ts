import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })


export class IxchelV2Service {

    constructor(private _http: HttpClient) {

    }

    public async getNavList() {
        const URL = 'http://rs02.arteaga.mx:3000/rpc/api';
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        //sessionID se reemplazara por el id generado por la respuesta del login.
        const body = { "action": "get_nav", "sessionID": "a8cf6785-8680-4daf-8000-8ccf1d885cff", "data": {} };

        let data = await this._http.post(URL, body, { headers }).pipe(map((response: any) => { return response })).toPromise();
        console.log("### GetNav ###");
        console.log(data);
        return data.data
    }

    public async getData(name_model: string) {
        const URL = 'http://rs02.arteaga.mx:3000/rpc/api';
        const headers = { 'Prefer': 'params=single-object', 'Content-Type': 'application/json' };
        //sessionID se reemplazara por el id generado por la respuesta del login.
        const body = { "action": "get_data", "sessionID": "a8cf6785-8680-4daf-8000-8ccf1d885cff", "data": { "model": name_model } };

        let data = await this._http.post(URL, body, { headers }).pipe(map((response: any) => { return response })).toPromise();
        console.log("### GetData ###");
        console.log(`Model: ${name_model}`);
        console.log(data);
        return data.data
    }


}