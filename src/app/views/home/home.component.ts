import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() infobarVisible = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.infobarVisible.emit(true);
  }

}
