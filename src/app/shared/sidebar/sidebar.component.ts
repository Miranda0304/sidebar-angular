import { Component, Input, OnInit } from '@angular/core';
import { menu_json } from '../../menu-json/menu-json';
import { ObjectsService } from "../../services/objects_methods/objects.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //Searcher
  @Input() searcherText = "";

  //Lists
  list_menu_level_01 = [];
  list_menu_level_02 = [];
  list_menu_level_03 = [];
  list_menu_level_04 = [];
  list_menu_level_05 = [];
  list_menu_level_06 = [];

  //Visibility of level
  lstVisible = [
    { level: 2, isVisible: false },
    { level: 3, isVisible: false },
    { level: 4, isVisible: false },
    { level: 5, isVisible: false },
    { level: 6, isVisible: false },
    { level: 7, isVisible: false },
  ]

  constructor(private _serviceObjects: ObjectsService) {
    this.list_menu_level_01 = menu_json.data;
    this.list_menu_level_01 = this._serviceObjects.changeAllKeys(this.list_menu_level_01);
   
  }

  ngOnInit(): void {
  }

  openSubMenu(menu_id: number, level_to_open: number) {

    if (level_to_open == 2) {
      this.list_menu_level_02 = this.list_menu_level_01.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_02 = this._serviceObjects.changeAllKeys(this.list_menu_level_02);

      this.list_menu_level_02.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 3) {
      this.list_menu_level_03 = this.list_menu_level_02.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_03 = this._serviceObjects.changeAllKeys(this.list_menu_level_03);

      this.list_menu_level_03.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 4) {
      this.list_menu_level_04 = this.list_menu_level_03.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_04 = this._serviceObjects.changeAllKeys(this.list_menu_level_04);

      this.list_menu_level_04.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 5) {
      this.list_menu_level_05 = this.list_menu_level_04.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_05 = this._serviceObjects.changeAllKeys(this.list_menu_level_05);

      this.list_menu_level_05.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 6) {
      this.list_menu_level_06 = this.list_menu_level_05.filter(x => x.item0 == menu_id).map(x => x.item4)[0]
      this.list_menu_level_06 = this._serviceObjects.changeAllKeys(this.list_menu_level_06);

      this.list_menu_level_06.length > 0 ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

}
