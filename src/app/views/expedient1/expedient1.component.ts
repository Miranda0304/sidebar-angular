import { Component, OnInit } from '@angular/core';
import { form_expedient1 } from "../../forms-json/form-expedient1";
import { InfobarService } from "../../services/inforbar_visible/visible.service";
import { ObjectsService } from "../../services/objects_methods/objects.service";

@Component({
  selector: 'app-expedient1',
  templateUrl: './expedient1.component.html',
  styleUrls: ['./expedient1.component.scss']
})
export class Expedient1Component implements OnInit {

  lstForms = [];

  constructor(private _serviceInfobar: InfobarService, private _serviceObjects: ObjectsService) {
    this._serviceInfobar.isVisible(false);
    this.lstForms = this._serviceObjects.changeAllKeys(form_expedient1)
  }

  ngOnInit(): void {
  }


}
