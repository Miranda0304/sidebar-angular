import { Component, OnInit } from '@angular/core';
import { form_expedient1 } from "../../forms-json/form-expedient1";
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-expedient1',
  templateUrl: './expedient1.component.html',
  styleUrls: ['./expedient1.component.scss']
})
export class Expedient1Component implements OnInit {

  lstForms = [];
  ngSwitchCase: any
  constructor(private _serviceInfobar: InfobarService) {
    this._serviceInfobar.isVisible(false);
    this.lstForms = form_expedient1;
  }

  ngOnInit(): void {
  }

}
