import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { menu_json } from './menu-json/menu-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  list_menu_level_01 = [];
  list_menu_level_02 = [];
  list_menu_level_03;
  
  lstVisible = [
    { level: 1, isVisible: false },
    { level: 2, isVisible: false },
    { level: 3, isVisible: false },
  ]

  menuText;

  constructor() {
    this.list_menu_level_01 = menu_json ;
  }

  openSubMenu(menu_id: number, level: number) {
    // console.log(menu_id);
    // console.log(`Level: ${level}`);

    if (level == 2) {
      this.list_menu_level_02 = this.list_menu_level_01.filter(x => x.id == menu_id).map(x => x.menu_02)[0]
      this.list_menu_level_02 != undefined ? 
      this.lstVisible.map(x => x.level != level ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level != level ? x.isVisible = false : x.isVisible = false);

    }
    if (level == 3) {
      this.list_menu_level_03 = this.list_menu_level_02.filter(x => x.id == menu_id).map(x => x.menu_03)[0]
      this.list_menu_level_03 != undefined ? 
      this.lstVisible.map(x => x.level != level ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level != level ? x.isVisible = true : x.isVisible = false);
      console.log(this.list_menu_level_03 != undefined);
    }

  }

}