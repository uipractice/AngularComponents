export const Code = {
    html: {
content: `<ng5-slider [(value)]="value" [(highValue)]="highValue" [options]="options"></ng5-slider>`,
    language: 'html'
    },
    ts: {
content: `import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Code } from './code';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

@Component({
selector: 'app-dualslider',
templateUrl: './dualslider.component.html',
styleUrls: ['./dualslider.component.scss']
})
export class DualsliderComponent implements OnInit {
code: any;

value: number = 100;
highValue: number = 60;
options: Options = {
floor: 0,
ceil: 200
};

constructor(public eShareDataService: EShareDataService) { }

ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
}  
}
`,
    language: 'javascript'
    },
    css: {
    content: `
.ng5-slider{
width:50%;
}
    `,
    language: 'css'
    }
    }
    