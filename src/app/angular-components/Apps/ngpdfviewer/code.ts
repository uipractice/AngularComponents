export const Code = {
    html: {
        content: `
        <mat-card class="m-t-15"  *ngIf="!eShareDataService.bootstrapCode">
        <span>
          <h2>PDF File Viewer</h2>
        
        <button mat-raised-button style="background-color: #0088D1; color: white; margin-bottom: 20px;" (click)="downloadFile()">Download PDF</button>
        
        </span>
        <pdf-viewer
          [src]="pdfSrc"
          [render-text]="true"
          [original-size]="false"
          style="width: 800px; height: 600px"
        ></pdf-viewer>
      
      </mat-card>
    `,
        language: 'html'
        },
    ts: {
        content: `import { Component, OnInit,ViewChild } from '@angular/core';
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
            const withoutLastChunk = this.pdfSrc.slice(0, this.pdfSrc.lastIndexOf("."));
            link.download = withoutLastChunk;
            link.href = this.pdfSrc;
            link.click();
            }
          }
         
        
        
  `,
        language: 'javascript'
        },
    css: {
        content: `
        /* There is no TS code for Bootstrap */
           `,
        language: 'css'
        },
        // bootstrapHtml:{
        //   content:`
        //   <!-- There is no HTML code for Bootstrap -->
        //   `,
        //   language: 'HTML'
        // },
        // bootstrapTS:{
        //   content:`
          
        //   `,
        //   language: 'TS'
        // },
        // bootstrapCSS:{
        //   content:`
        //   /* There is no CSS code for Bootstrap*/
        //   `,
        //   language: 'CSS'
        // }
    }
