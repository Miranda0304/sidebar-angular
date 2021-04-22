import { Component, OnInit } from '@angular/core';
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service"

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  globalSearcher: string;
  visibleMenu = true;
  isVisibleContextualArea = false;

  constructor(private _serviceContextualArea: ContextualAreaService,) {
    this._serviceContextualArea.readStatusContextualArea.subscribe((data) => {
      this.isVisibleContextualArea = data;
    });
  }

  ngOnInit(): void {
  }

  collapse_all() {
    this.visibleMenu = !this.visibleMenu;
    localStorage.setItem("VISIBLE_MENU", this.visibleMenu.toString())
    setTimeout(() => {
      window.scroll(10000, 0);
    }, 1);
  }
}
