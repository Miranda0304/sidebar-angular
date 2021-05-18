import { Component, OnInit, Input } from '@angular/core';
import { views_json } from "../../../../database/views-json/view-json";
import { tables_json } from "src/database/table-json/tables-json";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @Input() partial_name_path: string = "";
  @Input() partial_name_table: string = "";

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

  constructor(private _ixchelV2Service: IxchelV2Service) { }

  ngOnInit(): void {
    this.loadTablesAPI();
  }

  async loadTablesAPI() {

    if (this.partial_name_path != "") {
      if (this.partial_name_table != "") {
        let lst_tables = [];
        let lst_headers = [];
        let lst_information = [];
        let name_view = "";

        await this._ixchelV2Service.getTable("sys_table_tables", this.partial_name_table).then(async (tables) => {
          if (tables != undefined) {
            lst_tables = tables;
            name_view = lst_tables[0].view_name;

            await this._ixchelV2Service.getTable("sys_table_fields", this.partial_name_table).then(async (headers) => {

              lst_headers = headers.filter((header) => header.displayed == true).sort((a, b) => a.field_order - b.field_order);

              lst_tables[0].header = [];

              lst_headers.forEach((header) => {
                lst_tables[0].header.push(header)
              });

            });// END second getData


            await this._ixchelV2Service.getTable(name_view).then(async (information) => {
              let information_rows = [];
              lst_information = lst_tables.map(x => x.header)[0].map(x => x.field_name);

              await information.forEach(element => {
                information_rows.push(Object.keys(element)
                  .filter(key => lst_information.includes(key))
                  .reduce((obj, key) => {
                    obj[key] = element[key];
                    return obj;
                  }, {}));
              });

              lst_tables[0].information = information_rows;

            });// END third getData

            this.lst_tables = lst_tables;

          }
        }); // END first getData

      }


      this.dtOptions = {
        pagingType: 'full_numbers',
        language: this.datatable_language,
        order: [],
        deferRender: true,
        lengthChange: false,
        lengthMenu: [10]
        //columnDefs: [{ orderable: false, targets: [3] }]
      };

    }

  }


}
