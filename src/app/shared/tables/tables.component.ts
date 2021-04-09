import { Component, OnInit, Input } from '@angular/core';
import { views_json } from "../../../database/views-json/view-json";
import { tables_json } from "src/database/table-json/tables-json";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @Input() partial_name_component: string = "";

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

  constructor() { }

  ngOnInit(): void {
    this.loadTables();
  }

  loadTables() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: this.datatable_language,
      order: [],
      deferRender: true,
      //columnDefs: [{ orderable: false, targets: [3] }]
    };

    let lst_view = views_json.data.filter(x => x.id_view == this.partial_name_component).map(x => x.tables)[0];
    if (lst_view != undefined) {
      this.lst_tables = tables_json.data.filter((table) => lst_view.includes(table.id)).sort((a, b) => a.order - b.order);
    }
  }

}
