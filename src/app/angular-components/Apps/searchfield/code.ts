export const Code = {
html: {
content: `<mat-form-field >
<i class="met-search" id="materialicons">search</i>
<input type="text" aria-label="Assignee"  matInput [formControl]="myControl"
[matAutocomplete]="auto" id="mySearchField" style="text-transform: capitalize"
placeholder="Please Eneter Atleast 3 Charcters">
<mat-autocomplete #auto="matAutocomplete">
<mat-option *ngFor="let option of listItems.cards | async" 
[value]="option">
{{option }}
</mat-option>
</mat-autocomplete>
</mat-form-field> `,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import {Code} from './code';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
@Component({
selector: 'app-searchfield',
templateUrl: './searchfield.component.html',
styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {
seachiconDisplay:boolean = true;
listItems: any = [
{
cards: [
	{ "id": '1010', "name": "ramesh" },
	{ "id": '1011',"name": "suresh"}, 
	{"id": '1012',"name": "ramu"}, 
	{ "id": '1013', "name": "uday"},
	{ "id": '1014', "name": "sai"},
	{"id": '1015', "name": "kanak"},
	{"id": '1016',"name": "dukka"},
	{"id": '1017',"name": "akash"},
	{"id": '1018', "name": "tushar"}
]
}
]
myControl = new FormControl();
options: any;
code:any;
constructor(public eShareDataService : EShareDataService, ) { }
ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
this.listItems.cards = this.myControl.valueChanges
.pipe(
startWith(''),
map(value => this._filter(value))
); 
this.dividibngList();
}
private _filter(value: string) {  
const filterValue = value;
if(value.length>=3){
	return this.options.filter(option => option.toLowerCase().includes(filterValue));
}else{
	return [];
}
}
dividibngList(){
this.options = [];
for(var i=0; i<=this.listItems.length-1; i++){
	for(var j=0; j<=this.listItems[i].cards.length-1; j++){
		this.options.push(this.listItems[i].cards[j].name && this.listItems[i].cards[j].id );
	}
}
}
}
`,
language: 'javascript'
},
css: {
content: `/*for search icon */
#materialicons{
position: absolute;
top:-10px;
right:6px;
}
.mat-input-element{
padding-left:5px;
}
`,
language: 'css'
},
bootstrapHtml: {
content: `<div class="form-group has-search">
<span class="fa fa-search form-control-feedback"></span>
<input type="text" class="form-control" placeholder="Search" matInput [formControl]="myControl" [matAutocomplete]="auto" id="mySearchField"
placeholder="Please Eneter Atleast 3 Charcters" style='border:1px solid #808080; width:50%;'>
<mat-autocomplete #auto="matAutocomplete">
<mat-option *ngFor="let option of listItems.cards | async" [value]="option">
{{option}}
</mat-option>
</mat-autocomplete>
</div>`,
language: 'HTML'
},
bootstrapTS: {
content: `import { Component, OnInit } from '@angular/core';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import {Code} from './code';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
@Component({
selector: 'app-searchfield',
templateUrl: './searchfield.component.html',
styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {
seachiconDisplay:boolean = true;
listItems: any = [
{
	cards: [
		{ "id": '1010', "name": "ramesh" },
		{ "id": '1011',"name": "suresh"}, 
		{"id": '1012',"name": "ramu"}, 
		{ "id": '1013', "name": "uday"},
		{ "id": '1014', "name": "sai"},
		{"id": '1015', "name": "kanak"},
		{"id": '1016',"name": "dukka"},
		{"id": '1017',"name": "akash"},
		{"id": '1018', "name": "tushar"}
	]
}
]
myControl = new FormControl();
options: any;
code:any;
constructor(public eShareDataService : EShareDataService, ) { }
ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
this.listItems.cards = this.myControl.valueChanges
.pipe(
	startWith(''),
	map(value => this._filter(value))
	); 
	this.dividibngList();
}
private _filter(value: string) {  
	const filterValue = value;
	if(value.length>=3){
		return this.options.filter(option => option.toLowerCase().includes(filterValue));
	}else{
		return [];
	}
}
dividibngList(){
	this.options = [];
	for(var i=0; i<=this.listItems.length-1; i++){
		for(var j=0; j<=this.listItems[i].cards.length-1; j++){
			this.options.push(this.listItems[i].cards[j].name && this.listItems[i].cards[j].id );
		}
	}
}
}`,
language: 'TS'
},
bootstrapCSS: {
content: `.form-control-feedback{
position:absolute;
left:303px;
color:rgba(139, 132, 132, 0.993);
}
.bts{
width:35%;
padding-left:3px;
}

`,
language: 'CSS'
}
}
