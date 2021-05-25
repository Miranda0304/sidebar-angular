import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { GlobalService } from "src/app/services/Global/global.service"
import { IxchelV2Service } from 'src/app/services/API_Ixchelv2/ixchel_v2.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  isVisibleLoading = true;

  user: UserModel = new UserModel();
  rememberme = false;
  current_year = new Date().getFullYear();
  showTextButton = true;
  showSpinner = false;


  constructor(private _authenticationService: AuthenticationService,
    private router: Router, private _ixchelV2Service: IxchelV2Service,
    private _globalService: GlobalService,) {

    //Redirección segun el rol
    if (this._authenticationService.isAuthenticated()) {
      this.redirectionRoutes();
    }

  }

  ngOnInit(): void {
    if (localStorage.getItem('username')) {
      this.user.username = localStorage.getItem('username');
      this.rememberme = true;
    }

    setTimeout(() => {
      this.isVisibleLoading = false;
    }, 1000);
  }

  login(form: NgForm) {

    if (form.invalid) { return };
    this.showSpinner = true;
    this.showTextButton = false;

    this._authenticationService.login(this.user).then((result) => {
      if (result != undefined) {
        this._ixchelV2Service.getNavigation().then((result) => {
          if (result != undefined) {
            this._globalService.addRoutes(result);
            this.redirectionRoutes();
          }
        }).catch((err) => {
          console.log(err);
        });
      } else {
        this.showSpinner = false;
        this.showTextButton = true;
      }

      this.remember();
    });
  }

  redirectionRoutes() {
    this.router.navigateByUrl('main/home');
  }

  remember() {
    if (this.rememberme) {
      localStorage.setItem('username', this.user.username);
    } else {
      localStorage.removeItem('username');
    }
  }

}


export class UserModel {
  username: string;
  password: string;
}