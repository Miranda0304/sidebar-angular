import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from "@angular/forms";
import { forms_json } from "src/database/forms-json/forms-json";
import { views_json } from "src/database/views-json/view-json";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() partial_name_path: string = "";
  @Input() partial_name_form: string = "";

  lst_data_form = {}
  lst_forms = [];
  lst_data = [];
  id_data: string;
  test_data_upsert = {};

  constructor(private _ixchelV2Service: IxchelV2Service) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadForms();
    }, 120);
  }

  async loadForms() {
    if (this.partial_name_path != "") {
      if (this.partial_name_form != "") {
        await this._ixchelV2Service.getForm('vw_sys_fields', this.partial_name_form).then((result) => {
          // console.log(result);
          //this.lst_forms = forms_json.data.filter((form) => lst_view.includes(form.form_name)).sort((a, b) => a.ordinal - b.ordinal);
          this.lst_forms = result.sort((a, b) => a.ordinal - b.ordinal);
          // this.lst_forms.forEach(element => {
          //   this.lst_data_form[element.field_name] = this.lst_data[0][element.field_name];
          // });

        }).catch((err) => {
          console.log("loadForms", err);
        });
      }
    }
  }



  async upsert(fields: {}) {
    if (Object.keys(fields).length == 0) return;
    await this._ixchelV2Service.upsert(fields).then((result) => {
      if (result != undefined) {
        this.id_data = result[0].id;
        this.test_data_upsert = result[0];
      }
    }).catch((err) => {
      console.log("upsert", err);
    });

  }

  saveData(form: NgForm, table_name: string, field_name: string) {
    //if (form.invalid) { return };
    if (form.controls[field_name].invalid) { return };
    let data = {};

    if (this.id_data != undefined) {
      console.log("Editar");
      data["id"] = this.id_data;
      data["model"] = table_name;
      data[field_name] = this.lst_data_form[field_name];
    } else {
      console.log("Crear");
      data["model"] = table_name;
      data[field_name] = this.lst_data_form[field_name];
    }

    this.upsert(data);
  }

  newData() {
    this.lst_data_form = {};
    this.id_data = undefined;
  }

  async loadGetData(model_name: string, data_id?: string) {
    await this._ixchelV2Service.getData(model_name, data_id).then((result) => {
      this.lst_data = result.sort((a, b) => a.id - b.id);
    }).catch((err) => {
      console.log("loadGetData", err);
    });;
  }


}
