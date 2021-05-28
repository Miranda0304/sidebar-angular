import { Component, OnInit, Input } from '@angular/core';
import { views_json } from "../../../../database/views-json/view-json";
import { tables_json } from "src/database/table-json/tables-json";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";
import { Subject } from 'rxjs';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @Input() partial_name_path: string = "";
  @Input() partial_name_table: string = "";

  userQuestionUpdate = new Subject<string>();

  lst_tables = [];

  name_view = "";
  lst_information = [];
  table = [];
  columnDefs = [];
  pagination = 10;
  page_change: number;


  constructor(private _ixchelV2Service: IxchelV2Service) {

  }

  ngOnInit(): void {
    this.loadTablesAPI();


  }
  ngAfterViewInit() {
    this.searchRecords();
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


    this.lst_tables = this.table;
  }


  searchRecords() {
    this.userQuestionUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.loadInformationRows(value);
        this.page_change = 1;
      });
  }



}
