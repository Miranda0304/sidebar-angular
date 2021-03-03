import { Component } from '@angular/core';
import { InfobarService } from "./services/inforbar_visible/visible.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  globalSearcher: string;
  visibleMenu = true
  isVisibleInfobar = false;

  constructor(private _serviceInfobar: InfobarService) {

    this._serviceInfobar.readStatusInfobar.subscribe((data) => {
      this.isVisibleInfobar = data;
    });

  }

  collapse_all() {
    this.visibleMenu = !this.visibleMenu;
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

}