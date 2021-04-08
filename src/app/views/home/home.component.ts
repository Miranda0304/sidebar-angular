import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IxchelV2Service } from "../../services/API_Ixchelv2/ixchel_v2.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fileToUpload: File = null;


  constructor(private _ixchelV2Service: IxchelV2Service) {
  }

  ngOnInit(): void {
  }

  name_model = "";

  searchData() {
    this._ixchelV2Service.getData(this.name_model).then((result) => {

    }).catch((err) => {
      console.warn(err.message);
    });
  }


  async SavePhoto(inp) {
    let user = { name: 'john', age: 34 };
    let formData = new FormData();
    let photo = inp.files[0];

    formData.append("photo", photo);
    formData.append("user", JSON.stringify(user));

    const ctrl = new AbortController()    // timeout
    setTimeout(() => ctrl.abort(), 5000);

    try {
      let r = await fetch('/upload/image',
        { method: "POST", body: formData, signal: ctrl.signal });
      console.log('HTTP response code:', r.status);
    } catch (e) {
      console.log('Huston we have problem...:', e);
    }

  }

  async handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    let user = { name: 'john', age: 34 };
    let formData = new FormData();
    let photo = this.fileToUpload;

    formData.append("photo", photo);
    formData.append("user", JSON.stringify(user));

    const ctrl = new AbortController()    // timeout
    setTimeout(() => ctrl.abort(), 5000);

    try {
      let r = await fetch('/upload/image',
        { method: "POST", body: formData, signal: ctrl.signal });
      console.log('HTTP response code:', r.status);
    } catch (e) {
      console.log('Huston we have problem...:', e);
    }
  }

  // uploadFileToActivity() {
  //   this._ixchelV2Service.postFile(this.fileToUpload).then((result) => {

  //   }).catch((err) => {

  //   });
  // }

}
