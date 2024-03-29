import { Component, OnInit } from '@angular/core';
import { GlobalService } from "src/app/services/Global/global.service"
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {
  globalSearcher: string;
  visibleMenu = true
  isVisibleContextualArea = false;
  constructor(private _globalService: GlobalService,
    private _ixchelV2Service: IxchelV2Service,
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

}
