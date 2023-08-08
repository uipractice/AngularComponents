export const Code = {
html: {
content: `<form class="example-form">
<mat-form-field class="example-full-width">
<input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
<mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
<mat-option *ngFor="let option of filteredOptions | async" [value]="option">
{{option}}
</mat-option>
</mat-autocomplete>
</mat-form-field>
</form>
`,
language: 'html'
},
ts: {
content: `import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
selector: 'app-e-mat-autocomplete',
templateUrl: './e-mat-autocomplete.component.html',
styleUrls: ['./e-mat-autocomplete.component.scss']
})
export class EMatAutocompleteComponent implements OnInit {
myControl = new FormControl();
options: string[] = ['One', 'Two', 'Three'];
filteredOptions: Observable<string[]>;
ngOnInit() {
this.filteredOptions = this.myControl.valueChanges.pipe(
startWith(''),
map(value => this._filter(value))
);
}
private _filter(value: string): string[] {
const filterValue = value.toLowerCase();
return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
}
}        
`,
language: 'javascript'
},
css: {
content: `.example-form {
min-width: 150px;
max-width: 500px;
width: 100%;
}
.example-full-width {
width: 100%;
}        
`,
language: 'css'
},
bootstrapHtml:{
content:`<form class="example-form">
<mat-form-field class="example-full-width">
<input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
<mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
<mat-option *ngFor="let option of filteredOptions | async" [value]="option">
{{option}}
</mat-option>
</mat-autocomplete>
</mat-form-field>
</form>`,
language: 'HTML'
},
bootstrapTS:{
content:`import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
selector: 'app-e-mat-autocomplete',
templateUrl: './e-mat-autocomplete.component.html',
styleUrls: ['./e-mat-autocomplete.component.scss']
})
export class EMatAutocompleteComponent implements OnInit {
myControl = new FormControl();
options: string[] = ['One', 'Two', 'Three'];
filteredOptions: Observable<string[]>;
ngOnInit() {
this.filteredOptions = this.myControl.valueChanges.pipe(
startWith(''),
map(value => this._filter(value))
);
}
private _filter(value: string): string[] {
const filterValue = value.toLowerCase();
return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
}
}`,
language: 'TS'
},
bootstrapCSS:{
content:`.example-form {
min-width: 150px;
max-width: 500px;
width: 100%;
}
.example-full-width {
width: 100%;
}`,
language: 'CSS'
}
}