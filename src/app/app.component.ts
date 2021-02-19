import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { menu_json } from './menu-json/menu-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  menuText1 = "";
  menuText2 = "";
  menuText3 = "";
  menuText4 = "";
  menuText5 = "";
  menuText6 = "";

  list_menu_level_01 = [];
  list_menu_level_02 = [];
  list_menu_level_03 = [];
  list_menu_level_04 = [];
  list_menu_level_05 = [];
  list_menu_level_06 = [];

  visibleMenu = true;
  lstVisible = [
    { level: 2, isVisible: false },
    { level: 3, isVisible: false },
    { level: 4, isVisible: false },
    { level: 5, isVisible: false },
    { level: 6, isVisible: false },
  ]

 lstAux = [];
  constructor() {
    this.list_menu_level_01 = menu_json;
    this.lstAux = menu_json;
    console.log(this.lstAux);

    Object.keys(this.lstAux).forEach(element => {

      console.log(element);
    });
  }

  openSubMenu(menu_id: number, level_to_open: number) {

    if (level_to_open == 2) {
      this.list_menu_level_02 = this.list_menu_level_01.filter(x => x.id == menu_id).map(x => x.menu_02)[0]

      this.list_menu_level_02 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 3) {
      this.list_menu_level_03 = this.list_menu_level_02.filter(x => x.id == menu_id).map(x => x.menu_03)[0]

      this.list_menu_level_03 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 4) {
      this.list_menu_level_04 = this.list_menu_level_03.filter(x => x.id == menu_id).map(x => x.menu_04)[0]

      this.list_menu_level_04 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 5) {
      this.list_menu_level_05 = this.list_menu_level_04.filter(x => x.id == menu_id).map(x => x.menu_05)[0]

      this.list_menu_level_05 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 6) {
      this.list_menu_level_06 = this.list_menu_level_05.filter(x => x.id == menu_id).map(x => x.menu_06)[0]

      this.list_menu_level_06 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }

  }

  collapse_all() {
    this.visibleMenu = !this.visibleMenu;
  }

}