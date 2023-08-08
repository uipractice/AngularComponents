export const Code = {
html: {
content: `<form  #myForm="ngForm" (ngSubmit)="onSubmitmyForm(myForm.value)" accept-charset="UTF-8" >
<ckeditor [(ngModel)]="mycontent" #myckeditor="ngModel" name="myckeditor" [config]="ckeConfig"
(paste)="onPaste($event)" required>
</ckeditor>
<div *ngIf="myckeditor.invalid && myckeditor.touched" id="warn">Required field.</div><br>
<button [disabled]="myForm.invalid" class="btn btn-warning">Submit</button>
</form>`,
language: 'html'
},
ts: {
content: `import { Component, OnInit, ViewChild, OnDestroy  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { Code } from './code';

@Component({
selector: 'app-text-editor',
templateUrl: './text-editor.component.html',
styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

myForm = FormGroup;
ckeConfig: any;
mycontent: string;
code: any;

@ViewChild('myckeditor', {static: true}) ckeditor: any;

constructor(public eShareDataService: EShareDataService ) {
this.mycontent = \`<p>My html content. Click here to edit.</p>\`;
}

ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
this.ckeConfig = {
allowedContent: false,
extraPlugins: 'divarea',
forcePasteAsPlainText: true
};
this.ckeConfig.removeButtons  = 'Save';
}
onPaste($event: any): void {
console.log('onPaste');
}
onSubmitmyForm(form) {
console.log(this.mycontent);
}
}
`,
language: 'javascript'
},
css: {
content: `#warn{
  color:red;
}`,
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
