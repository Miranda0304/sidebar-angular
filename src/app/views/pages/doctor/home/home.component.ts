import { Component, OnInit } from '@angular/core';
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ixchelV2Service: IxchelV2Service) { }

  ngOnInit(): void {
  }

  async logout() {
    await this._ixchelV2Service.logout().then((result) => {

    }).catch((err) => {

    });
  }

}
