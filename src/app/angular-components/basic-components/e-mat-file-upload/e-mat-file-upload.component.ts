import { Component, OnInit } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service'

@Component({
  selector: 'app-e-mat-file-upload',
  templateUrl: './e-mat-file-upload.component.html',
  styleUrls: ['./e-mat-file-upload.component.scss']
})
export class EMatFileUploadComponent implements OnInit {
  photoFormData:FormData= new FormData();
  code:any;
  constructor(public eShareDataService : EShareDataService) {}
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  onFileUpload(event: any) {
    this.photoFormData = new FormData();
    this.photoFormData.append("multiPartFile", event.files[0]);
    this.photoFormData.append("uploadType", "PROFILE_PICTURE");
     
  }
}
