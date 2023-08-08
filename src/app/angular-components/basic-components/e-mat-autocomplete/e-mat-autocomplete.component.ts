import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-autocomplete',
  templateUrl: './e-mat-autocomplete.component.html',
  styleUrls: ['./e-mat-autocomplete.component.scss']
})
export class EMatAutocompleteComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | any;
  code:any;
  tempArray: any = [];
  constructor(public eShareDataService : EShareDataService) { 
     
  }
  ngOnInit() {
    
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
     
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  findSearchedVal(e: any){
    const filterValue = e.target.value.toLowerCase();
    this.tempArray.push(filterValue);
    console.log(this.tempArray);
   // e.target.value.filter(value => value.toLowerCase().indexOf(filterValue))
  }

}
