import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { menu_json } from './menu-json/menu-json';
import { SlideInOutAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideInOutAnimation]
})

export class AppComponent {

  lstMenus = {};
  menuText;
  isActive = false;
  animationState = 'out';

  constructor() {
    console.log("Constructor");
    this.lstMenus = menu_json;
    console.log(this.lstMenus);
  }

  ngOnInit() {
    console.log("ONIT2");
  }

  dropdown(menu_id) {

    this.animationState = 'in';


    let menu = document.querySelector(`#${menu_id}`);
    let sider = document.querySelector(`#${menu_id}`);

    if (menu.classList.contains('active')) {
      sider.classList.remove("active");
      menu.classList.remove("active");

      console.log("#1");
      console.log(sider);
    } else {
      sider.classList.remove("active");
      this.animationState = 'out';
      menu.classList.add("active");
      console.log("#2");
      console.log(sider);
    }
  }



}