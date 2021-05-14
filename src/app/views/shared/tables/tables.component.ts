import { Component, OnInit, Input } from '@angular/core';
import { views_json } from "../../../../database/views-json/view-json";
import { tables_json } from "src/database/table-json/tables-json";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @Input() partial_name_component: string = "";

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
    if (this.partial_name_component != "") {
      this.dtOptions = {
        pagingType: 'full_numbers',
        language: this.datatable_language,
        order: [],
        deferRender: true,
        lengthMenu: [10, 25, 50, 75, 100]
        //columnDefs: [{ orderable: false, targets: [3] }]
      };

      let lst_tables = [];
      let lst_headers = [];
      let lst_information = [];
      let lst_name_views = [];

      let lst_view = views_json.data.filter(x => x.path_view == this.partial_name_component).map(x => x.tables)[0];

      if (lst_view != undefined) {
        await this._ixchelV2Service.getData("sys_table_tables").then(async (tables) => {
          if (tables != undefined) {
            lst_tables = tables.filter((table) => lst_view.includes(table.table_name));
            lst_name_views = lst_tables.map(x => x.view_name);            

            await this._ixchelV2Service.getData("sys_table_fields").then(async (headers) => {
              lst_headers = headers.filter((header) => lst_view.includes(header.table_name) && header.displayed == true).sort((a, b) => a.field_order - b.field_order);              

              lst_tables.forEach((table, index) => {
                lst_tables[index].header = [];                
                lst_headers.forEach((header) => {
                  if (header.table_name == table.table_name) {
                    lst_tables[index].header.push(header)
                  }
                });
              });
            });// END second getData


            lst_name_views.forEach(async (view, index) => {

              //if (lst_tables[index].view_name == view) {
              await this._ixchelV2Service.getData(view).then(async (information) => {

                lst_information = lst_tables.map(x => x.header)[index].map(x => x.field_name);                
                let information_rows = [];
                
                await information.forEach(element => {
                  information_rows.push(Object.keys(element)
                    .filter(key => lst_information.includes(key))
                    .reduce((obj, key) => {
                      obj[key] = element[key];
                      return obj;
                    }, {}));
                });
                
                lst_tables[index].information = information_rows;

              });// END third getData

              // }              
              this.lst_tables = lst_tables;
            });

          }
        }); // END first getData
      }

    }

  }


}
