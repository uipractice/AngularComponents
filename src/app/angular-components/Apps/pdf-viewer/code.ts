export const Code = {
html: {
content: `<ngx-extended-pdf-viewer [src]="'../assets/atlassian-git-cheatsheet.pdf'" useBrowserLocale="true" 
[textLayer]="true" height="80vh">
</ngx-extended-pdf-viewer>`,
language: 'html'
},
ts: {
content: `import { Component } from '@angular/core';
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

`,
language: 'javascript'
},
css: {
content: `/* no css */`,
language: 'css'
},
bootstrapHtml: {
content: ``,
language: 'HTML'
},
bootstrapTS: {
content: ``,
language: 'TS'
},
bootstrapCSS: {
content: `
`,
language: 'CSS'
}
}
