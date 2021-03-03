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
  }

  collapse_all() {
    this.visibleMenu = !this.visibleMenu;
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

}