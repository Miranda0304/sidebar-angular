import { Component, OnInit } from '@angular/core';
import { GlobalService } from "src/app/services/Global/global.service"
import { AuthenticationService } from "src/app/services/Authentication/authentication.service"
import { Route, Router } from '@angular/router';
import { ContactComponent } from '../../pages/admin/contact/contact.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
