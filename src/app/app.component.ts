import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { menu_json } from './menu-json/menu-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {;
  lstMenus = {};
  menuText;

  constructor(){
    console.log("Constructor");
    this.lstMenus = menu_json;
    console.log(this.lstMenus);
  }

  ngOnInit() {
   console.log("ONIT");
  }
  
}