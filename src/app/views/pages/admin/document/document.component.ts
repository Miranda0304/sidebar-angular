import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

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
