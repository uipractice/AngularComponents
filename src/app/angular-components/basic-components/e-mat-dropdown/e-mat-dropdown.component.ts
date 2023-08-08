import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-e-mat-dropdown',
  templateUrl: './e-mat-dropdown.component.html',
  styleUrls: ['./e-mat-dropdown.component.scss']
})
export class EMatDropdownComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  code:any;
  constructor(public eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
