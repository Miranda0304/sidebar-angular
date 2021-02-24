import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) { 
    this._serviceInfobar.isVisible(true);
  }

  ngOnInit(): void {

  }

}
