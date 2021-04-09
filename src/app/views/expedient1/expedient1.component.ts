import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { forms_json } from "../../../database/forms-json/forms-json";
import { tables_json } from "../../../database/table-json/tables-json";
import { views_json } from "../../../database/views-json/view-json";

@Component({
  selector: 'app-expedient1',
  templateUrl: './expedient1.component.html',
  styleUrls: ['./expedient1.component.scss']
})
export class Expedient1Component implements OnInit {
  name_component = "view_expedient_0"
  lst_forms = [];
  lst_tables = [];
  dtOptions: DataTables.Settings = {};
  datatable_language = {
    "emptyTable": "Sin registros.",
    "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    "infoEmpty": "Mostrando 0 a 0 de 0 elementos",
    "infoFiltered": "(filtrado de _MAX_ entradas totales)",
    "infoPostFix": "",
    "infoThousands": "",
    "lengthMenu": "Mostrar _MENU_ elementos",
    "loadingRecords": "Henter data...",
    "processing": "Processing...",
    "search": "Buscar:",
    "zeroRecords": "Sin resultados.",
    "paginate": {
      "first": "Primero",
      "last": "Ultimo",
      "next": "Siguiente",
      "previous": "Anterior"
    }
  };

  formExpedient1: FormGroup;
  lstValidators = {};
  fieldControl: any;
  formControlName = "";

  constructor(private fb: FormBuilder) {
    this.loadForms();
    this.loadTables();
  }

  ngOnInit(): void {
    this.myValidators();

    //Se inicializa el arreglo que contendra los errores
    this.fieldControl = [];
  }

  loadForms() {
    let lst_view = views_json.data.filter(x => x.id_view == this.name_component).map(x => x.forms)[0];

    if (lst_view != undefined) {
      this.lst_forms = forms_json.data.filter((form) => lst_view.includes(form.form_id));
    }
  }

  loadTables() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: this.datatable_language,
      order: [],
      deferRender: true,
      //columnDefs: [{ orderable: false, targets: [3] }]
    };

    let lst_view = views_json.data.filter(x => x.id_view == this.name_component).map(x => x.tables)[0];
    if (lst_view != undefined) {
      this.lst_tables = tables_json.data.filter((table) => lst_view.includes(table.id)).sort((a, b) => a.order - b.order);
    }
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
