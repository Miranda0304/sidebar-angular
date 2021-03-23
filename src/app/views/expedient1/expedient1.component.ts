import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { form_json } from "../../../database/forms-json/form-json";;
import { views_json } from "../../../database/views-json/view-json";

@Component({
  selector: 'app-expedient1',
  templateUrl: './expedient1.component.html',
  styleUrls: ['./expedient1.component.scss']
})
export class Expedient1Component implements OnInit {
  name_component = "view_expedient_0"
  lst_forms = [];
  
  formExpedient1: FormGroup;
  lstValidators = {};
  fieldControl: any;
  formControlName = "";

  constructor(private fb: FormBuilder) {
    this.loadForms();
  }

  ngOnInit(): void {
    this.myValidators();

    //Se inicializa el arreglo que contendra los errores
    this.fieldControl = [];
  }

  loadForms() {
    let lst_view = views_json.data.filter(x => x.id_view == this.name_component).map(x => x.forms)[0];

    if (lst_view != undefined) {
      this.lst_forms = form_json.data.filter((form) => lst_view.includes(form.form_id));
      //this.lst_forms = form_json.data;
    }
    
   console.log(form_json.data);

  }

  myValidators() {

    this.lst_forms.forEach(element => {
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
