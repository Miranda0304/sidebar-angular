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

  constructor(private _serviceInfobar: InfobarService) {
    this._serviceInfobar.isVisible(false);
    this.lstForms = this.changeKeysList(form_expedient1)
  }

  ngOnInit(): void {
  }
  
  renameKey = (object, key, newKey) => {
    const clonedObj = Object.assign({}, object);
    const targetKey = clonedObj[key];
    delete clonedObj[key];
    clonedObj[newKey] = targetKey;
    return clonedObj;
  };

  changeKeysList(list_array = []) {
    let newLst = [];
    let keys = Object.keys(list_array[0])

    list_array.forEach((element) => {
      keys.forEach((key, idx) => {
        element = this.renameKey(element, key, `item${idx}`)
      });
      newLst.push(element)
    });
    return newLst;
  }

}
