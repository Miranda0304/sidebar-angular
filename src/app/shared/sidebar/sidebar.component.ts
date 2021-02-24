import { Component, OnInit } from '@angular/core';
import { menu_json } from '../../menu-json/menu-json';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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

  visibleInfobar = true;

  lstVisible = [
    { level: 2, isVisible: false },
    { level: 3, isVisible: false },
    { level: 4, isVisible: false },
    { level: 5, isVisible: false },
    { level: 6, isVisible: false },
    { level: 7, isVisible: false },
  ]

  constructor() {
    this.list_menu_level_01 = menu_json;
    this.list_menu_level_01 = this.changeKeysList(this.list_menu_level_01);
  }

  ngOnInit(): void {

  }

  renameKey = (object, key, newKey) => {
    const clonedObj = Object.assign({}, object);
    const targetKey = clonedObj[key];
    delete clonedObj[key];
    clonedObj[newKey] = targetKey;
    return clonedObj;
  };

  changeKeysList(list_menu = []) {
    let newLst = [];
    list_menu.forEach((element) => {
      let keys = Object.keys(element)
      keys.forEach((key, idx) => {
        element = this.renameKey(element, key, `item${idx}`)
      });
      newLst.push(element)
    });
    return newLst;
  }

  openSubMenu(menu_id: number, level_to_open: number) {

    if (level_to_open == 2) {
      this.list_menu_level_02 = this.list_menu_level_01.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_02 = this.changeKeysList(this.list_menu_level_02);

      this.list_menu_level_02.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 3) {
      this.list_menu_level_03 = this.list_menu_level_02.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_03 = this.changeKeysList(this.list_menu_level_03);

      this.list_menu_level_03.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 4) {
      this.list_menu_level_04 = this.list_menu_level_03.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_04 = this.changeKeysList(this.list_menu_level_04);

      this.list_menu_level_04.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 5) {
      this.list_menu_level_05 = this.list_menu_level_04.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_05 = this.changeKeysList(this.list_menu_level_05);

      this.list_menu_level_05.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 6) {
      this.list_menu_level_06 = this.list_menu_level_05.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_06 = this.changeKeysList(this.list_menu_level_06);

      this.list_menu_level_06.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 0.1);
  }

}
