import { Component, Input, OnInit } from '@angular/core';
import { menu_json } from '../../../../database/menu-json/menu-json';
import { ContextualAreaService } from "../../../services/Contextual_area_visible/contextual-area.service";
import { IxchelV2Service } from "../../../services/API_Ixchelv2/ixchel_v2.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //Searcher
  @Input() searcherText = "";

  //Contains of number of turns.
  number_turns = Array.from(Array(20).keys()).slice(1);

  //Stores the data of each menu.
  list_menus = {};

  //Show or not the contextual area
  contextual_area: any;

  //Visibility of each menu
  lstVisible = [
    new VisibleMenu()
  ]


  constructor(private _serviceContextualArea: ContextualAreaService, private _ixchelV2Service: IxchelV2Service) {

    //this.list_menus[1] = menu_json.data;
    
    this._ixchelV2Service.getNavList().then((result) => {
      this.list_menus[1] = result.sort((a, b) => a.ordinal - b.ordinal);
    }).catch((err) => {
      console.log(err);
    });

    localStorage.getItem('CONTEXTUAL_AREA') == 'true' ? this.contextual_area = true : this.contextual_area = false;

    this._serviceContextualArea.isVisible(this.contextual_area);
  }

  ngOnInit(): void {
    //Insert all submenus.
    this.number_turns.forEach(element => {
      this.lstVisible.push({ level: element, isVisible: false, isCollapse: false })
    });
    this.lstVisible.push({ level: this.number_turns.length + 1, isVisible: false, isCollapse: false });
  }

  openSubMenu(menu_id: number, level_to_open: number) {
    this.list_menus[level_to_open] = this.list_menus[level_to_open - 1].filter(x => x.id == menu_id).map(x => x.submenu)[0]

    this.list_menus[level_to_open].length > 0 ?
      this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    let collapse = this.list_menus[level_to_open - 1].filter(x => x.id == menu_id)[0].collapse;
    this.lstVisible.filter(x => x.level == level_to_open - 1).map(x => x.isCollapse = collapse)

    this.saveContextualArea(menu_id, this.list_menus[level_to_open - 1]);

    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

  saveContextualArea(menu_id: number, lst = []) {
    this.contextual_area = lst.filter(x => x.id == menu_id)[0].contextual_area
    this._serviceContextualArea.isVisible(this.contextual_area);
    localStorage.setItem("CONTEXTUAL_AREA", this.contextual_area);
  }

}

export class VisibleMenu {
  level: number;
  isVisible: boolean;
  isCollapse: boolean;
}
