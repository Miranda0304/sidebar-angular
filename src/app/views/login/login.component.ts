import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  rememberme = false;

  constructor(private _ixchelV2Service: IxchelV2Service, private router: Router) {
    if (this._ixchelV2Service.isAuthenticated()){
      this.router.navigateByUrl('admin/home');
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('username')) {
      this.user.username = localStorage.getItem('username');
      this.rememberme = true;
    }
  }


  login(form: NgForm) {
    if (form.invalid) { return };

    if (this.rememberme) {
      localStorage.setItem('username', this.user.username);
    } else {
      localStorage.removeItem('username');
    }

    console.log("Login component");

    this._ixchelV2Service.login(this.user).then((result) => {
      //console.log(result);
      this.router.navigateByUrl('admin/home');
    }).catch((err) => {

    });
  }

}


export class UserModel {
  username: string;
  password: string;
}