import { Component, OnInit } from '@angular/core';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { Code } from './code';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';



@Component({
selector: 'app-searchfield',
templateUrl: './searchfield.component.html',
styleUrls: ['./searchfield.component.scss']
})

export class SearchfieldComponent implements OnInit {
seachiconDisplay: boolean = true;
//countries=['ramu','akash','tushar'];
myInput: any;

listItems: any = [
{
cards: [
{ "id": '1009', "name": "Evoke" },
{ "id": '1010', "name": "Ramesh" },
{ "id": '1011',"name": "Suresh"}, 
{"id": '1012',"name": "ramu"}, 
{ "id": '1013', "name": "Uday"},
{ "id": '1014', "name": "Sai"},
{"id": '1015', "name": "Kanak"},
{"id": '1016',"name": "Dukka"},
{"id": '1017',"name": "Akash"},
{"id": '1018', "name": "Tushar"},
{"id": '1019', "name": "Basha"},
{"id": '1020', "name": "UIUX"}
]
}
]
myControl = new FormControl();
options: any;




code: any;
constructor(public eShareDataService: EShareDataService ) { }



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

if (value.length >= 3) {
return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
} else {
return [];
}
}



dividibngList() {
this.options = [];
for (var i = 0; i <= this.listItems.length - 1; i++) {

for (var j = 0; j <= this.listItems[i].cards.length - 1; j++) {
this.options.push(this.listItems[i].cards[j].name, this.listItems[i].cards[j].id);
}
}
}

} 







