import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { forms_json } from "src/database/forms-json/forms-json";
import { views_json } from "src/database/views-json/view-json";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name_component = "view_contact"
  lst_data_form = {}
  lst_forms = [];

  constructor(private _ixchelV2Service: IxchelV2Service) {

  }

  ngOnInit(): void {
    this.loadForms();
  }

  async loadForms() {
    let lst_view = views_json.data.filter(x => x.id_view == this.name_component).map(x => x.forms)[0];

    await this._ixchelV2Service.getForm('vw_sys_fields', 'person').then((result) => {
      //this.lst_forms = forms_json.data.filter((form) => lst_view.includes(form.form_name)).sort((a, b) => a.ordinal - b.ordinal);
      this.lst_forms = result.filter((form) => lst_view.includes(form.form_name)).sort((a, b) => a.ordinal - b.ordinal);;

      this.lst_forms.forEach(element => {
        this.lst_data_form[element.field_name] = "";
      });

    }).catch((err) => {

    });
  }

  clickme(form: NgForm, field_name: string) {
    //if (form.invalid) { return };
    if (form.controls[field_name].invalid) { return };
    console.log(`Is correct the ${field_name}?`);
    console.log(!form.controls[field_name].invalid);
    console.log(`Saving "${this.lst_data_form[field_name]}"...`);
  }

}
