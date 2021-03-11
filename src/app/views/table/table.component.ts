import { Component, OnInit } from '@angular/core';
import { table_json } from "../../../database/table-json/table-json";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  lst_tables: Object;

  constructor() { 
    this.lst_tables = table_json.data;
    console.log(this.lst_tables);
  }

  ngOnInit(): void {
  }

}
