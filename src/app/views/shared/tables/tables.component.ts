import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { views_json } from "../../../../database/views-json/view-json";
import { tables_json } from "src/database/table-json/tables-json";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @Input() partial_name_path: string = "";
  @Input() partial_name_table: string = "";

  lst_tables = [];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
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

  name_view = "";
  lst_information = [];
  table = [];
  configuration_columns = [];
  columnDefs = [];
  pagination = 10;
  page_change: any;

  dtTrigger: Subject<TablesComponent> = new Subject();

  constructor(private _ixchelV2Service: IxchelV2Service) { }

  ngOnInit(): void {
    this.loadTablesAPI();


  }


  async loadTablesAPI() {
    if (this.partial_name_path != "") {
      if (this.partial_name_table != "") {

        // Get global table's configuration.
        await this._ixchelV2Service.getTable("sys_table_tables", this.partial_name_table).then(async (tables) => {
          if (tables != undefined) {
            this.pagination = tables[0].pagination;
            this.table = tables;
            this.name_view = tables[0].view_name;

            // Insert headers.
            await this._ixchelV2Service.getTable("sys_table_fields", this.partial_name_table).then(async (headers) => {
              if (headers != undefined) {

                headers = headers.filter((header) => header.displayed == true).sort((a, b) => a.field_order - b.field_order);
                this.configuration_columns = headers;

                this.table[0].header = [];
                headers.forEach((header) => {
                  this.table[0].header.push(header)
                });
              }
            });// END second getData


            // Insert information in rows.
            // ##############################################
            this.loadInformationRows("");

          }
        }); // END first getData


      } // End second if
    } // End first if

  }

  // ##############################################
  async loadInformationRows(filter: string) {
    let information_rows = [];

    await this._ixchelV2Service.getSearcher(this.name_view, filter).then(async (information) => {

      if (information == undefined || information == null) {
        information_rows = [];
      }

      if (information != undefined) {
        this.lst_information = this.table.map(x => x.header)[0].map(x => x.field_name);

        await information.forEach(element => {
          information_rows.push(Object.keys(element)
            .filter(key => this.lst_information.includes(key))
            .reduce((obj, key) => {
              obj[key] = element[key];
              return obj;
            }, {}));
        });

        this.table[0].information = information_rows;

      } else {
        this.table[0].information = information_rows;
      }
    });

    // Insert configuration of columns ( headers ).
    this.configuration_columns.forEach((element, index) => {
      this.columnDefs.push({ orderable: element.sortable, searchable: element.searchable, targets: [index] })
    });


    this.dtOptions = {
      pagingType: 'full_numbers', // Type of pagination
      language: this.datatable_language, // Translate table
      deferRender: true, // Performance
      lengthChange: false, // Show or hide number for show rows.
      lengthMenu: [this.pagination], // Size of show rows
      searching: false,
      columnDefs: this.columnDefs, // Configuration columns
      stateSave: true
    };

    this.lst_tables = this.table;
  }


  searchRecords(val: string) {
    this.loadInformationRows(val);
  }



}
