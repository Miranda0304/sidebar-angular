import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class RackspaceService {

    constructor(private _http: HttpClient) {

    }

    public async rackespace() {
        //URL complete = "https://identity.api.rackspacecloud.com/v2.0/tokens";
        const url_rackespace = '/v2.0/tokens';
        const headers = { 'Content-type': 'application/json' };
        const body = { "auth": { "RAX-KSKEY:apiKeyCredentials": { "username": "jesus.miranda", "apiKey": "3566b98a1c06433ca75e7890ccb5f802" } } };

        console.log("### RACKESPACE SERVICE");

        let data = await this._http.post(url_rackespace, body, { headers }).toPromise().then((result: any) => {
            let token = result.access.token.id;
            let account_number = result.access.token.tenant.id;
            //https://dfw.servers.api.rackspacecloud.com/v2
            //https://dfw.images.api.rackspacecloud.com/v2
            let endpoint = "/v2/" + account_number + "/servers";
            let auth_headers = { "X-Auth-Token": token };
            console.log(result);

            this._http.get(endpoint, { headers: auth_headers }).toPromise().then((result: any) => {
                console.log("SERVERS", result);
            }).catch((err) => {
                console.log("Error Server", err);
            });
        }).catch((err) => {
            console.log("Error Token", err);
        });

    }
}