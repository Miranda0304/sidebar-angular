import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { NgForm } from "@angular/forms";
import { forms_json } from "src/database/forms-json/forms-json";
import { views_json } from "src/database/views-json/view-json";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() partial_name_component: string = "";

  lst_data_form = {}
  lst_forms = [];
  lst_data = [];

  constructor(private _ixchelV2Service: IxchelV2Service, private _changeDetector: ChangeDetectorRef,) {
    //this._changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.loadGetData("dm_persons", "c0004e4e-e76e-41ff-a117-79a60034ecce");
  
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadForms();
      console.log(this.lst_forms);
    }, 60);
    
  }

  async loadForms() {
    let lst_view = views_json.data.filter(x => x.id_view == this.partial_name_component).map(x => x.forms)[0];
    if (lst_view.length > 0) {
      // ################################################# getData puede recibir el form directo getForm('vw_sys_fields', 'persons')
      await this._ixchelV2Service.getForm('vw_sys_fields').then((result) => {
        //this.lst_forms = forms_json.data.filter((form) => lst_view.includes(form.form_name)).sort((a, b) => a.ordinal - b.ordinal);
        this.lst_forms = result.filter((form) => lst_view.includes(form.form_name)).sort((a, b) => a.ordinal - b.ordinal);

        this.lst_forms.forEach(element => {
          this.lst_data_form[element.field_name] = this.lst_data[0][element.field_name];
        });
      }).catch((err) => {
        console.log("loadForms", err);
      });
    }
  }

  async loadGetData(model_name: string, data_id?: string) {
    await this._ixchelV2Service.getData(model_name, data_id).then((result) => {
      this.lst_data = result.sort((a, b) => a.id - b.id);
    }).catch((err) => {
      console.log("loadGetData", err);
    });;
  }

  async upsert(model_name: string, fields: {}) {
    if (model_name == "") return;

    const body_data = { "model_name": model_name };

    await this._ixchelV2Service.upsert(model_name, fields).then((result) => {
      this.loadGetData("dm_persons", "c0004e4e-e76e-41ff-a117-79a60034ecce");
    }).catch((err) => {
      console.log("upsert", err);
    });

  }

  saveData(form: NgForm, field_name: string) {
    //if (form.invalid) { return };
    if (form.controls[field_name].invalid) { return };
    console.log(`Is correct the ${field_name}?`);
    console.log(!form.controls[field_name].invalid);
    console.log(`Saving "${this.lst_data_form[field_name]}"...`);

    let data = {};
    data["id"] = "c0004e4e-e76e-41ff-a117-79a60034ecce";
    data["model"] = "dm_persons";
    data[field_name] = this.lst_data_form[field_name];

    this.upsert('dm_persons', data);
  }

}
