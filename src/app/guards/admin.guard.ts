import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _ixchelV2Service: IxchelV2Service, private router: Router) {

  }

  canActivate(): boolean {
    let rol = localStorage.getItem('rol');

    if (rol == 'admin') {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
