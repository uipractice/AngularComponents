import { Component } from '@angular/core';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { Code } from './code';

@Component({
selector: 'app-pdf-viewer',
templateUrl: './pdf-viewer.component.html',
styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent {

code: any;
constructor(public eShareDataService: EShareDataService ) { }
ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
}

}
