import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  lstMenus = [
    {
      id: 1, title: 'Home', path: 'home', icon: 'fa fa-address-book', sub_menu: [
        {
          id: 1.1, title: 'Home 1.1', path: 'home', icon: 'fa fa-address-book-o', sub_sub_menu: [
            { id: 1.11, title: 'Home 1.1.1', path: 'home', icon: 'fa fa-bath' },
            { id: 1.12, title: 'Exped 1.1.2', path: 'expedient', icon: 'fa fa-bath' }
          ]
        },
        {
          id: 1.2, title: 'Exped 1.2', path: 'expedient', icon: 'fa fa-address-book-o'
        },
      ]
    },
    {
      id: 2, title: 'Expedient', path: 'expedient', icon: 'fa fa-address-book', sub_menu: [
        { id: 2.1, title: 'Home 2.1', path: 'home', icon: 'fa fa-address-book-o' },
        { id: 2.2, title: 'Exped 2.2', path: 'expedient', icon: 'fa fa-address-book-o' }
      ]
    },
    { id: 3, title: 'Home', path: 'home', icon: 'fa fa-address-book' },
    { id: 4, title: 'Expedient', path: 'expedient', icon: 'fa fa-address-book' },
    { id: 5, title: 'Home', path: 'home', icon: 'fa fa-address-book' },
  ];

  lstVisible = [
    { level: 1, isVisible: false },
    { level: 2, isVisible: false },
    { level: 3, isVisible: false },
  ]

  menuText;
  sub_i = 0;
  list;
  list2;

  constructor() {

  }

  openSubMenu(menu_id: number, level: number) {
    // console.log(menu_id);
    // console.log(`Level: ${level}`);

    if (level == 2) {
      this.list = this.lstMenus.filter(x => x.id == menu_id).map(x => x.sub_menu)[0]
      this.list != undefined ? this.lstVisible.map(x => x.level != level ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level != level ? x.isVisible = false : x.isVisible = false);

    }
    if (level == 3) {
      this.list2 = this.list.filter(x => x.id == menu_id).map(x => x.sub_sub_menu)[0]
      this.list2 != undefined ? this.lstVisible.map(x => x.level != level ? x.isVisible = true : x.isVisible = false) : this.lstVisible.map(x => x.level != level ? x.isVisible = true : x.isVisible = false);
      console.log(this.list2 != undefined);
    }

  }

}