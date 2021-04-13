import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { iif } from 'rxjs';
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _ixchelV2Service: IxchelV2Service, private router: Router) {

  }

  canActivate(): boolean {
    if (this._ixchelV2Service.isAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
