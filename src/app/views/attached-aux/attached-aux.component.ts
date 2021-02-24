import { Component, OnInit } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-attached-aux',
  templateUrl: './attached-aux.component.html',
  styleUrls: ['./attached-aux.component.scss']
})
export class AttachedAuxComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) { 
    this._serviceInfobar.isVisible(true);
  }

  ngOnInit(): void {
  }

}
