import { Component, OnInit } from '@angular/core';
import { form_expedient1 } from "../../forms/form-expedient1";

@Component({
  selector: 'app-expedient1',
  templateUrl: './expedient1.component.html',
  styleUrls: ['./expedient1.component.scss']
})
export class Expedient1Component implements OnInit {

  lstForms = [];
  ngSwitchCase: any
  constructor() {
    this.lstForms = form_expedient1;
   }

  ngOnInit(): void {
  }

}
