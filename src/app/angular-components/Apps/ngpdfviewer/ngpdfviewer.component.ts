import { Component, OnInit,ViewChild } from '@angular/core';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
//import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { Code } from './code';

@Component({
  selector: 'app-ngpdfviewer',
  templateUrl: './ngpdfviewer.component.html',
  styleUrls: ['./ngpdfviewer.component.scss']
})
export class NgpdfviewerComponent implements OnInit {
  code:any

  constructor(public eShareDataService : EShareDataService) { }

  ngOnInit(): void {
    this.code=Code
    this.eShareDataService.pushCode(this.code);

  }
  pdfSrc="../assets/EvokeStyleGudie.pdf"

    downloadFile(){
      let link = document.createElement("a");
      console.log(link);    
      console.log('pdfsrc',this.pdfSrc);
    const withoutLastChunk = this.pdfSrc.slice(0, this.pdfSrc.lastIndexOf("."));
    link.download = withoutLastChunk;
    link.href = this.pdfSrc;
    link.click();
    }
    
  }
 

