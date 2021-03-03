import { Component, Input, OnInit } from '@angular/core';
import { menu_json } from '../../menu-json/menu-json';
import { ObjectsService } from "../../services/objects_methods/objects.service";
import { ContextualAreaService } from "../../services/contextual_area_visible/contextual-area.service";

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
  list_menu_level_07 = [];

  contextual_area: false;

  //Visibility of level
  lstVisible = [
    { level: 2, isVisible: false },
    { level: 3, isVisible: false },
    { level: 4, isVisible: false },
    { level: 5, isVisible: false },
    { level: 6, isVisible: false },
    { level: 7, isVisible: false },
  ]

  constructor(private _serviceObjects: ObjectsService, private _serviceContextualArea: ContextualAreaService) {
    this.list_menu_level_01 = menu_json.data;
    //this.list_menu_level_01 = this._serviceObjects.changeAllKeys(this.list_menu_level_01);
    this.list_menu_level_01 = this.list_menu_level_01;

    this.contextual_area = this.list_menu_level_01.filter(x => x.id)[0].contextual_area
    this._serviceContextualArea.isVisible(this.contextual_area);
  }

  ngOnInit(): void {
  }

  openSubMenu(menu_id: number, level_to_open: number) {

    if (level_to_open == 2) {
      this.list_menu_level_02 = this.list_menu_level_01.filter(x => x.id == menu_id).map(x => x.sub_menu)[0]

      //Contextual Area level 1
      this.contextual_area = this.list_menu_level_01.filter(x => x.id == menu_id)[0].contextual_area
      this._serviceContextualArea.isVisible(this.contextual_area);

      this.list_menu_level_02 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 3) {
      this.list_menu_level_03 = this.list_menu_level_02.filter(x => x.id == menu_id).map(x => x.sub_menu)[0]

      //Contextual Area level 2
      this.contextual_area = this.list_menu_level_02.filter(x => x.id == menu_id)[0].contextual_area
      this._serviceContextualArea.isVisible(this.contextual_area);

      this.list_menu_level_03 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 4) {
      this.list_menu_level_04 = this.list_menu_level_03.filter(x => x.id == menu_id).map(x => x.sub_menu)[0]

      //Contextual Area level 3
      this.contextual_area = this.list_menu_level_03.filter(x => x.id == menu_id)[0].contextual_area
      this._serviceContextualArea.isVisible(this.contextual_area);

      this.list_menu_level_04 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 5) {
      this.list_menu_level_05 = this.list_menu_level_04.filter(x => x.id == menu_id).map(x => x.sub_menu)[0];

      //Contextual Area level 4
      this.contextual_area = this.list_menu_level_04.filter(x => x.id == menu_id)[0].contextual_area
      this._serviceContextualArea.isVisible(this.contextual_area);

      this.list_menu_level_05 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 6) {
      this.list_menu_level_06 = this.list_menu_level_05.filter(x => x.id == menu_id).map(x => x.sub_menu)[0]

      //Contextual Area level 5
      this.contextual_area = this.list_menu_level_05.filter(x => x.id == menu_id)[0].contextual_area
      this._serviceContextualArea.isVisible(this.contextual_area);

      this.list_menu_level_06 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    if (level_to_open == 7) {
      this.list_menu_level_07 = this.list_menu_level_06.filter(x => x.id == menu_id).map(x => x.sub_menu)[0]

      //Contextual Area level 6
      this.contextual_area = this.list_menu_level_06.filter(x => x.id == menu_id)[0].contextual_area
      this._serviceContextualArea.isVisible(this.contextual_area);

      this.list_menu_level_07 != undefined ?
        this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    }
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

}
