import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-aux',
  templateUrl: './information-aux.component.html',
  styleUrls: ['./information-aux.component.scss']
})
export class InformationAuxComponent implements OnInit {

  pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
