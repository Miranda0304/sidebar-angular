import { Component, OnInit } from '@angular/core';
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service"
import { AuthenticationService } from "src/app/services/Authentication/authentication.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  globalSearcher: string;
  visibleMenu = true
  isVisibleContextualArea = false;

  constructor(private _serviceContextualArea: ContextualAreaService,
    private _authenticationService: AuthenticationService,
    private router: Router) {
    this._serviceContextualArea.readStatusContextualArea.subscribe((data) => {
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
