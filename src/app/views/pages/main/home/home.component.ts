import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { RackspaceService } from "src/app/services/Rackspace/rackspace.service";
import { views_json } from "src/database/views-json/view-json";
import { GlobalService } from "src/app/services/Global/global.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title_page = "Inicio";
  name_component = "";
  lst_content = [];

  constructor(private _ixchelV2Service: IxchelV2Service, private _rackspaceService: RackspaceService,
    private router: Router, private _globalService: GlobalService) {
    this.name_component = this.router.url.replace(/^\/main\/|\/$/g, '');
  }

  ngOnInit(): void {

    this.loadPageContent();
  }

  ngAfterViewInit(): void {
    this._globalService.readTitlePage.subscribe((title_menu) => {
      this.title_page = title_menu;

    });
  }

  async loadPageContent() {
    await this._ixchelV2Service.getPageContent("").then((result) => {
      //this.lst_content = views_json.data.filter(x => x.path_view == this.name_component)[0].content.sort((a, b) => a.ordinal - b.ordinal);
      this.lst_content = result.filter(x => x.path_view == this.name_component)[0].content.sort((a, b) => a.ordinal - b.ordinal);
    }).catch((err) => {
      console.log(err);
    });
  }




  name_model = "";
  searchData() {
    this._ixchelV2Service.getData(this.name_model).then((result) => {
      console.log(result);
    });
  }

  rackespace(file) {
    //let api = new rackApi.Api('jesus.miranda','3566b98a1c06433ca75e7890ccb5f802','api','us');
    this._rackspaceService.rackespace().then((result) => {
      // console.log(result);
    });
  }

}
