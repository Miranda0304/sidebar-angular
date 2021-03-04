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

  list_menus = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };

  contextual_area: boolean;

  //Visibility of level
  lstVisible = [
    { level: 1, isVisible: false, isCollapse: false },
    { level: 2, isVisible: false, isCollapse: false },
    { level: 3, isVisible: false, isCollapse: false },
    { level: 4, isVisible: false, isCollapse: false },
    { level: 5, isVisible: false, isCollapse: false },
    { level: 6, isVisible: false, isCollapse: false },
    { level: 7, isVisible: false, isCollapse: false },
    { level: 8, isVisible: false, isCollapse: false },
  ]

  constructor(private _serviceObjects: ObjectsService, private _serviceContextualArea: ContextualAreaService) {
    this.list_menus[1] = menu_json.data;
    localStorage.getItem('CONTEXTUAL_AREA') == 'true' || localStorage.getItem('CONTEXTUAL_AREA') == '1' ? this.contextual_area = true : this.contextual_area = false;
    this._serviceContextualArea.isVisible(this.contextual_area);
  }

  ngOnInit(): void {
  }

  openSubMenu(menu_id: number, level_to_open: number) {

    this.list_menus[level_to_open] = this.list_menus[level_to_open - 1].filter(x => x.id == menu_id).map(x => x.sub_menu)[0]

    this.list_menus[level_to_open] != undefined ?
      this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    let collapse = this.list_menus[level_to_open - 1].filter(x => x.id == menu_id)[0].collapse;
    this.lstVisible.filter(x => x.level == level_to_open - 1).map(x => x.isCollapse = collapse)

    this.saveContextualArea(menu_id, this.list_menus[level_to_open - 1]);

    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

  saveContextualArea(menu_id: number, lst = []) {
    //Contextual Area
    this.contextual_area = lst.filter(x => x.id == menu_id)[0].contextual_area
    this._serviceContextualArea.isVisible(this.contextual_area);
    localStorage.setItem("CONTEXTUAL_AREA", this.contextual_area.toString());
  }

}
