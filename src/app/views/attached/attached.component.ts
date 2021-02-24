import { Component, OnInit } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-attached',
  templateUrl: './attached.component.html',
  styleUrls: ['./attached.component.scss']
})
export class AttachedComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) { 
    this._serviceInfobar.isVisible(false);
  }

  ngOnInit(): void {
  }

}
