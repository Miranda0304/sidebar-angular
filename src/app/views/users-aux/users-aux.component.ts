import { Component, OnInit } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-users-aux',
  templateUrl: './users-aux.component.html',
  styleUrls: ['./users-aux.component.scss']
})
export class UsersAuxComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) {
    this._serviceInfobar.isVisible(true);
  }

  ngOnInit(): void {
  }

}
