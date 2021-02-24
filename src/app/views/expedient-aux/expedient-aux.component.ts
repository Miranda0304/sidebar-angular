import { Component, OnInit } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-expedient-aux',
  templateUrl: './expedient-aux.component.html',
  styleUrls: ['./expedient-aux.component.scss']
})
export class ExpedientAuxComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) { 
    this._serviceInfobar.isVisible(false);
  }

  ngOnInit(): void {
  }

}
