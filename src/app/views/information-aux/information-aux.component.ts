import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-aux',
  templateUrl: './information-aux.component.html',
  styleUrls: ['./information-aux.component.scss']
})
export class InformationAuxComponent implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  // pdfSrc = {
  //   url: "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf",
  //   withCredentials: false
  // };


  constructor() {
  }

  ngOnInit(): void {
  }

}
