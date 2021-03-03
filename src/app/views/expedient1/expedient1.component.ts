import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
  myForm: FormGroup;
  lstValidators = {};

  constructor(private _serviceInfobar: InfobarService, private _serviceObjects: ObjectsService, private fb: FormBuilder) {
    this._serviceInfobar.isVisible(false);
    this.lstForms = form_expedient1;
  }

  ngOnInit(): void {
    this.myValidators();
    this.myError = [];
  }

  myValidators() {

    this.lstForms.forEach(element => {
      const array_validators = [];
      this.lstValidators[element.formControl] = [];
      this.lstValidators[element.formControl].push('');
      element.isRequire === true ? array_validators.push(Validators.required) : null;
      array_validators.push(Validators.minLength(element.minLength));
      array_validators.push(Validators.maxLength(element.maxLength));
      this.lstValidators[element.formControl].push(array_validators);
    });

    this.myForm = this.fb.group(this.lstValidators); //{ FormControl_1: ['', [validacion_1, validacion 2, validacion_3] ]}
  }

  myError: any;
  keyme(name: string) {
    // console.log(name);
    // console.log(this.myForm);
    this.myError = this.myForm.controls[name];
  }
}
