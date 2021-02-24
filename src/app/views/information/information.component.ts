import { Component, OnInit } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) {
    this._serviceInfobar.isVisible(true);
  }

  ngOnInit(): void {
  }

}
