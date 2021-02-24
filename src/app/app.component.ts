import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { element } from 'protractor';
import { menu_json } from './menu-json/menu-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  visibleMenu = true
  visibleInfobar = true;

  constructor() { }

  collapse_all() {
    this.visibleMenu = !this.visibleMenu;
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

  getBoolean(isVisible: boolean) {
    this.visibleInfobar = isVisible;
    console.log("Component");
    console.log(this.visibleInfobar);
  }
  
}