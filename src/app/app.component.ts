import { Component } from '@angular/core';
import { ContextualAreaService } from "./services/contextual_area_visible/contextual-area.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  globalSearcher: string;
  visibleMenu = true
  isVisibleContextualArea = false;

  constructor(private _serviceContextualArea: ContextualAreaService) {
    this._serviceContextualArea.readStatusContextualArea.subscribe((data) => {
      this.isVisibleContextualArea = data;
    });

    localStorage.getItem('VISIBLE_MENU') == 'true' ? this.visibleMenu = true : this.visibleMenu = false;

  }

  collapse_all() {
    this.visibleMenu = !this.visibleMenu;
    localStorage.setItem("VISIBLE_MENU", this.visibleMenu.toString())
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

}