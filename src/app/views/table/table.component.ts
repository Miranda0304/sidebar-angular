import { Component, OnInit } from '@angular/core';
import { views_json } from "../../../database/views-json/view-json";
import { table_json } from "src/database/table-json/tables-json";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  name_component = "view_users_0"
  lst_tables = [];
  dtOptions: DataTables.Settings = {};
  //dtOptions = [{ 0: DataTables.Settings }];

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

  constructor() {
    this.loadTables();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: this.datatable_language,
      order: [],
      deferRender: true,
      //columnDefs: [{ orderable: false, targets: [3] }]
    };
  }


  loadTables() {
    let lst_view = views_json.data.filter(x => x.id_view == this.name_component).map(x => x.tables)[0];
    if (lst_view != undefined) {
      this.lst_tables = table_json.data.filter((table) => lst_view.includes(table.id));
    }
  }


}
