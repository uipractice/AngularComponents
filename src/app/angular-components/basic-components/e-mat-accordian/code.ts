export const Code = {
html: {
content: `<mat-accordion>
<mat-expansion-panel>
<mat-expansion-panel-header>
<mat-panel-title>
Personal data
</mat-panel-title>
<mat-panel-description>
Type your name and age
</mat-panel-description>
</mat-expansion-panel-header>
<mat-form-field>
<input matInput placeholder="First name">
</mat-form-field>
<mat-form-field>
<input matInput placeholder="Age">
</mat-form-field>
</mat-expansion-panel>
<mat-expansion-panel  [expanded]="true" (opened)="panelOpenState = true" (closed)="panelOpenState = false">
<mat-expansion-panel-header>
<mat-panel-title>
Self aware panel
</mat-panel-title>
<mat-panel-description>
Currently I am {{panelOpenState ? 'open' : 'closed'}}
</mat-panel-description>
</mat-expansion-panel-header>
<p>I'm visible because I am open</p>
</mat-expansion-panel>
</mat-accordion>
`,
language: 'html'
},
ts: {
content: `import {Component} from '@angular/core';
/**
* @title Basic expansion panel
*/
@Component({
selector: 'expansion-overview-example',
templateUrl: 'expansion-overview-example.html',
styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
panelOpenState = false;   
}
`,
language: 'javascript'
},
css: {
content: `
/** No CSS for this example */
`,
language: 'css'
},
bootstrapHtml:{
content:`<div class="panel-group" id="accordion">
<div class="panel panel-default">
<div class="panel-heading" (click)="arrowFunction()">
<h4 class="panel-title">
<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Bootstrap Accordion</a>
<span class="angle" *ngIf="angleDown">  <i class="fas fa-angle-down"></i></span>
<span class="angle" *ngIf="!angleDown">  <i class="fas fa-angle-up"></i></span>
</h4>
</div>
<div id="collapse1" class="panel-collapse collapse in">
<div class="panel-body">Accordion is a component which organizes content within collapsable items.
Accordion allows showing only one collapsed item at a time. Accordions can toggle through a number of text blocks on a single click,
significantly improving the user experience of a project.
</div>
</div>
</div>
</div>
`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-e-mat-accordian',
templateUrl: './e-mat-accordian.component.html',
styleUrls: ['./e-mat-accordian.component.scss']
})
export class EMatAccordianComponent implements OnInit {
angleDown = true;
constructor(public eShareDataService : EShareDataService) { }
ngOnInit() {}
arrowFunction(){ 
this.angleDown?this.angleDown = false :  this.angleDown = true
}
}
`,
language: 'TS'
},
bootstrapCSS:{
content:`.panel{
background-color: #f5f5f5;
border: 1px solid transparent;
border-radius: 4px !important;
box-shadow: 0 1px 3px #aaa;
margin-bottom:10px;
}
.panel-body{
background: #fff;
padding:10px;
border-radius: 5px;
}
.panel-title{
margin-bottom: 0px;
width:100%;
font-size: 15px;
}
.panel-title a{
display: inline-block;
color:#0000008a;
cursor: pointer;
width:100%;
padding:10px 10px;
}
.panel-title{
color:#0000008a;
font-weight: 500;
}
.angle{
position: absolute;
right:10px;
top:10px;
}`,
language: 'CSS'
}
}