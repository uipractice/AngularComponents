import { Component, OnInit, ViewChild, OnDestroy  } from '@angular/core';
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
  ckeConfig: any= null;
  mycontent: string;
  code: any;

  @ViewChild('myckeditor', {static: true}) ckeditor: any;

  constructor(public eShareDataService: EShareDataService ) {
    this.mycontent = `<p>My html content. Click here to edit.</p>`;
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

  // onChange(ChangeEvent: {ckeditor}) {
  //   //const data = this.ckeditor.getData();
  //   console.log(this.mycontent);
  //   //this.log += new Date() + "<br />";
  // }

  onPaste($event: any): void {
    console.log('onPaste');
  }

  onSubmitmyForm(form : any) {
    alert(this.mycontent);
    console.log(this.mycontent);
  }

//   ngOnDestroy() {

//     if (this.ckeConfig.instance) {

//         this.ckeConfig.instance.removeAllListeners();
//         this.ckeConfig.instance.destroy();
//         this.ckeConfig.instance = null;
// }
//   }
}
