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
    //this.loadTables();
    this.loadTablesAPI();
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
      let lst_headers = tables_json.data.map((table) => table.header);
      this.lst_tables = tables_json.data.filter((table) => lst_view.includes(table.table_name)).sort((a, b) => a.order - b.order);
    }
  }

  async loadTablesAPI() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: this.datatable_language,
      order: [],
      deferRender: true,
      //columnDefs: [{ orderable: false, targets: [3] }]
    };

    let lst_tables = [];
    let lst_headers = [];
    let lst_information = [];
    let lst_name_views = [];


    let lst_view = views_json.data.filter(x => x.id_view == this.partial_name_component).map(x => x.tables)[0];
    // console.log("lst_view", lst_view);

    await this._ixchelV2Service.getData("sys_table_tables").then(async (tables) => {
      lst_tables = tables.filter((table) => lst_view.includes(table.table_name));
      lst_name_views = lst_tables.map(x => x.view_name);
      // console.log("sys_table_tables", tables);

      await this._ixchelV2Service.getData("sys_table_fields").then(async (headers) => {
        lst_headers = headers.filter((header) => lst_view.includes(header.table_name)).sort((a, b) => a.field_order - b.field_order);
        //console.log("sys_table_fields", lst_headers);

        lst_tables.forEach((table, index) => {
          lst_tables[index].header = [];
          // console.log(lst_tables[index]);
          headers.forEach((header) => {
            if (header.table_name == table.table_name) {
              lst_tables[index].header.push(header)
            }
          });
        });

      });// END second getData

      lst_information = lst_tables.map(x => x.header)[0].map(x => x.field_name);
      console.log(lst_tables);


      lst_name_views.forEach(async (view, index) => {
        let information_rows = [];
        //console.log(lst_tables[index].view_name == view);
        if (lst_tables[index].view_name == view) {

          await this._ixchelV2Service.getData(view).then(async (information) => {
            // console.log("###",);
            // console.log("vw_dm_persons", information);

            information.forEach(element => {
              information_rows.push(Object.keys(element)
                .filter(key => lst_information.includes(key))
                .reduce((obj, key) => {
                  obj[key] = element[key];
                  return obj;
                }, {}));

            });

            // console.log(information_rows);
          });// END third getData

          lst_tables[index].information = information_rows;
        }
        console.log("Final", lst_tables);

        this.lst_tables = lst_tables;
      });




    }); // END first getData




  }// End loadTablesAPI


}
