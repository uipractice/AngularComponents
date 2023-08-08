export const Code = {
html: {
content: `<mat-form-field>
<input matInput [matDatepicker]="picker" placeholder="Choose a date">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>
</mat-form-field>       
`,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-datepicker',
templateUrl: './e-mat-datepicker.component.html',
styleUrls: ['./e-mat-datepicker.component.scss']
})
export class EMatDatePickerComponent implements OnInit {
startDate : Date;
constructor() {
this.startDate = new Date();
}
ngOnInit() {
}
}
`,
language: 'javascript'
},
css: {
content: ` 
.divcontent{
display: flex;
justify-content: center;
}
.cardcontent{
width: 100%;
height: 100px;
margin: 5px;
}
.cardlayout{
display: flex;
flex-wrap: wrap;
width: 50%;
}
`,
language: 'css'
},
bootstrapHtml:{
content:`<input type="date" class="form-control" [(ngModel)]="model"/>
<br/>
<pre class="preClass">Model: {{ model | json }}</pre>`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-datepicker',
templateUrl: './e-mat-datepicker.component.html',
styleUrls: ['./e-mat-datepicker.component.scss']
})
export class EMatDatePickerComponent implements OnInit {
model;
constructor() {}
ngOnInit() {}
}`,
language: 'TS'
},
bootstrapCSS:{
content:`.form-control{width:300px;
padding:5px;
line-height: 1.42857143;
}
.preClass{
height:50px;
padding:10px !important;
width:300px;
}`,
language: 'CSS'
}
}