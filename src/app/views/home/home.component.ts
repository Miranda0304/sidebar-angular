import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IxchelV2Service } from "../../services/API_Ixchelv2/ixchel_v2.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ixchelV2Service: IxchelV2Service) {
  }

  ngOnInit(): void {
  }

  name_model = "";

  searchData() {
    this._ixchelV2Service.getData(this.name_model).then((result) => {

    }).catch((err) => {
      console.warn(err.message);
    });
  }

}
