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
        const body = { "action": "get_nav", "sessionID": "80564228-592e-4948-8837-070dd35627b9", "data": {} };

        let data = await this._http.post(URL, body, { headers }).pipe(map((response: any) => { return response })).toPromise();
        console.log(data);
        return data.data
    }


}