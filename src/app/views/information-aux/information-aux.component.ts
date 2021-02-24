import { Component, OnInit } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-information-aux',
  templateUrl: './information-aux.component.html',
  styleUrls: ['./information-aux.component.scss']
})
export class InformationAuxComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) { 
    this._serviceInfobar.isVisible(false);
  }

  ngOnInit(): void {
  }

}
