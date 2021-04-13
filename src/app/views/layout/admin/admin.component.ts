import { Component, OnInit } from '@angular/core';
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service"
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service"
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
    private _ixchelV2Service: IxchelV2Service,
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

  logout(){
    this._ixchelV2Service.logout();
    this.router.navigateByUrl('/login)');
  }

}
