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

  constructor(private router: Router, private _globalServices: GlobalService,
    private _ixchelV2Service: IxchelV2Service, private _authenticationService: AuthenticationService) {

  }

  ngAfterViewInit(): void {
    if (this._authenticationService.isAuthenticated()) {
      this._ixchelV2Service.getNavList().then(async (result) => {
        if (result != undefined) {
          this._globalServices.addRoutes(result);
        }
        // console.log(this.router.url);
        this.router.navigateByUrl(this.router.url);

      }).catch((err) => {
        console.log(err);
      });
    }

  }


}