import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { iif } from 'rxjs';
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authenticationService: AuthenticationService, private router: Router) {

  }

  canActivate(): boolean {
    if (this._authenticationService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
