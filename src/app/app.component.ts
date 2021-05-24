import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from "src/app/services/Global/global.service"
import { IxchelV2Service } from 'src/app/services/API_Ixchelv2/ixchel_v2.service';
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  lst_routes = false;

  constructor(private router: Router, private _globalService: GlobalService,
    private _ixchelV2Service: IxchelV2Service, private _authenticationService: AuthenticationService) {
    this.loadRoutesPath()
    console.log("##");;
  }

  ngAfterViewInit(): void {
    // console.log(this.router);
    // console.log(this.router.url == "/");
  }

  loadRoutesPath() {
    if (this.router.url == "/") {
      if (this._authenticationService.isAuthenticated()) {
        this._ixchelV2Service.getNavigation().then((result) => {
          if (result != undefined) {
            this._globalService.addRoutes(result);
            // this.router.navigateByUrl('main/home');
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  }


}