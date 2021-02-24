import { Component, OnInit } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-expedient',
  templateUrl: './expedient.component.html',
  styleUrls: ['./expedient.component.scss']
})
export class ExpedientComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) { 
    this._serviceInfobar.isVisible(true);
  }

  ngOnInit(): void {
  }

}
