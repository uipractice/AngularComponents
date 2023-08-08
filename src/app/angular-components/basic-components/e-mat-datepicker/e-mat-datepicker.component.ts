import { Component, OnInit } from '@angular/core';
 
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service'

@Component({
  selector: 'e-mat-datepicker',
  templateUrl: './e-mat-datepicker.component.html',
  styleUrls: ['./e-mat-datepicker.component.scss']
})
export class EMatDatePickerComponent implements OnInit {
  code:any;
  model: any;
  startDate : Date;
   
  constructor(public eShareDataService : EShareDataService) {
    this.startDate = new Date();
    
   }
   ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
     
  }
}
