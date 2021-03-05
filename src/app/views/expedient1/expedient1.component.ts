import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { form_expedient1 } from "../../forms-json/form-expedient1";;
import { ObjectsService } from "../../services/objects_methods/objects.service";

@Component({
  selector: 'app-expedient1',
  templateUrl: './expedient1.component.html',
  styleUrls: ['./expedient1.component.scss']
})
export class Expedient1Component implements OnInit {

  lstForms = [];
  formExpedient1: FormGroup;
  lstValidators = {};
  fielControl: any;
  formControlName = ""

  constructor(private _serviceObjects: ObjectsService, private fb: FormBuilder) {
    this.lstForms = form_expedient1;
  }

  ngOnInit(): void {
    this.myValidators();
    this.fielControl = [];
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

    this.formExpedient1 = this.fb.group(this.lstValidators); //{ FormControl_1: ['', [validacion_1, validacion 2, validacion_3] ]}
  }

  validate(name: string) {
    this.formControlName = name;
    this.fielControl = this.formExpedient1.controls[name];
  }

}
