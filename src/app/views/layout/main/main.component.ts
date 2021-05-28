import { Component, OnInit } from '@angular/core';
import { GlobalService } from "src/app/services/Global/global.service"
import { AuthenticationService } from "src/app/services/Authentication/authentication.service"
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  globalSearcher: string;
  visibleMenu = true
  isVisibleContextualArea = false;

  constructor(private _globalService: GlobalService,
    private _authenticationService: AuthenticationService,
    private router: Router) {

    this._globalService.readStatusContextualArea.subscribe((data) => {
      this.isVisibleContextualArea = data;
    });

    localStorage.getItem('VISIBLE_MENU') == 'true' ? this.visibleMenu = true : this.visibleMenu = false;

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('main/home');
    }, 100);
  }


  collapse_all() {
    this.visibleMenu = !this.visibleMenu;
    localStorage.setItem("VISIBLE_MENU", this.visibleMenu.toString())
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

  async logout() {
    await this._authenticationService.logout();
  }

}
