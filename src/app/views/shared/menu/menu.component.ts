import { Component, Input, OnInit } from '@angular/core';
import { menu_json } from '../../../../database/menu-json/menu-json';
import { GlobalService } from "../../../services/Global/global.service";
import { IxchelV2Service } from "../../../services/API_Ixchelv2/ixchel_v2.service";
import { Router } from '@angular/router';

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

  single_menu = {};

  //Show or not the contextual area
  contextual_area: any;

  //Visibility of each menu
  lstVisible = [
    new VisibleMenu()
  ]


  constructor(private _globalService: GlobalService, private _ixchelV2Service: IxchelV2Service, private router: Router) {
    this.loadNavList();
    //console.log(this.router.config);
    localStorage.getItem('CONTEXTUAL_AREA') == 'true' ? this.contextual_area = true : this.contextual_area = false;

    this._globalService.sendEstatusContextualArea(this.contextual_area);

  }

  ngOnInit(): void {
    //Insert all submenus.
    this.number_turns.forEach(element => {
      this.lstVisible.push({ level: element, isVisible: false, isCollapse: false })
    });
    this.lstVisible.push({ level: this.number_turns.length + 1, isVisible: false, isCollapse: false });
  }


  async loadNavList(menu_id?: string) {
    if (menu_id == undefined) {
      //this.list_menus[1] = menu_json.data;
      await this._ixchelV2Service.getNavList().then((result) => {
        if (result != undefined) {
          this.list_menus[1] = result;
        }
      });
    } else {
      //this.list_menus[1] = menu_json.data;
      await this._ixchelV2Service.getData("sys_navigation", menu_id).then((result) => {
        this.single_menu = result[0];
      });
    }

  }

  async openSubMenu(menu_id: string, level_to_open: number) {
    await this.loadNavList();
    // await this.loadNavList(menu_id);

    // let final = { ...this.list_menus[level_to_open - 1].filter(x => x.id == menu_id)[0], ...this.single_menu }
    // this.list_menus[level_to_open - 1].filter(x => x.id == menu_id).map(x => Object.assign({}, final));
    // console.log(this.list_menus[level_to_open - 1].filter(x => x.id == menu_id));

    setTimeout(() => {
      this._globalService.sendTitleDynamicPage(this.list_menus[level_to_open - 1].filter(x => x.id == menu_id)[0].title);
    }, 1);

    // Update menu previous witjh api's data.
    if (this.list_menus[level_to_open - 2] != undefined) {
      this.list_menus[level_to_open - 1] = this.list_menus[level_to_open - 2].filter(x => x.submenu.some(x => x.id == menu_id)).map(x => x.submenu)[0];
    }

    // Insert data to menu to open.
    this.list_menus[level_to_open] = this.list_menus[level_to_open - 1].filter(x => x.id == menu_id).map(x => x.submenu)[0];

    // Open other menu if there data.
    this.list_menus[level_to_open].length > 0 ?
      this.lstVisible.map(x => x.level <= level_to_open ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level < level_to_open ? x.isVisible = true : x.isVisible = false);

    let collapse = this.list_menus[level_to_open - 1].filter(x => x.id == menu_id)[0].collapse;
    this.lstVisible.filter(x => x.level == level_to_open - 1).map(x => x.isCollapse = collapse)

    this.saveContextualArea(menu_id, this.list_menus[level_to_open - 1]);

    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }

  saveContextualArea(menu_id: string, lst = []) {
    this.contextual_area = lst.filter(x => x.id == menu_id)[0].contextual_area
    this._globalService.sendEstatusContextualArea(this.contextual_area);
    localStorage.setItem("CONTEXTUAL_AREA", this.contextual_area);
  }

}

export class VisibleMenu {
  level: number;
  isVisible: boolean;
  isCollapse: boolean;
}
