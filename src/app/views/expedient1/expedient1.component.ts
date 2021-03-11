import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { form_expedient1 } from "../../../database/forms-json/form-expedient1";;
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
  fieldControl: any;
  formControlName = ""

  constructor(private _serviceObjects: ObjectsService, private fb: FormBuilder) {
    this.lstForms = form_expedient1.data;
  }

  ngOnInit(): void {
    this.myValidators();
    this.fieldControl = [];
  }

  myValidators() {

    this.lstForms.forEach(element => {
      const array_validators = [];
      this.lstValidators[element.id] = [];
      this.lstValidators[element.id].push('');
      element.is_require === true ? array_validators.push(Validators.required) : null;
      array_validators.push(Validators.minLength(element.min_length));
      array_validators.push(Validators.maxLength(element.max_length));
      this.lstValidators[element.id].push(array_validators);
    });

    this.formExpedient1 = this.fb.group(this.lstValidators); //{ FormControl_1: ['', [validacion_1, validacion 2, validacion_3] ]}
  }

  validate(name: string) {
    this.formControlName = name;
    this.fieldControl = this.formExpedient1.controls[name];
  }

}
