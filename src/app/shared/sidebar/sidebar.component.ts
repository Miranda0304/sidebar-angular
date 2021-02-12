import { Component, OnInit } from '@angular/core';
import { menu_json } from '../../menu-json/menu-json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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

}
