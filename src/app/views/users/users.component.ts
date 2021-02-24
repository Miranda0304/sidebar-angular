import { Component, OnInit } from '@angular/core';
import { InfobarService } from "../../services/inforbar_visible/visible.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private _serviceInfobar: InfobarService) {
    this._serviceInfobar.isVisible(true);
  }

  ngOnInit(): void {
  }

}
