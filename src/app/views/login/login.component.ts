import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { RackspaceService } from "src/app/services/Rackspace/rackspace.service";
import { ToastService } from 'ng-uikit-pro-standard';

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

  constructor(private _authenticationService: AuthenticationService,
    private router: Router, private toast: ToastService) {

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

    this._authenticationService.login(this.user).then((result) => {
      this.remember();
      this.redirectionRoutes();
    });
  }

  redirectionRoutes() {
    if (localStorage.getItem('rol') == 'admin') {
      this.router.navigateByUrl('administrador');
    }
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