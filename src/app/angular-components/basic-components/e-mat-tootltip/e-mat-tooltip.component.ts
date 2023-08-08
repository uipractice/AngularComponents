import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'e-mat-tooltip',
  templateUrl: './e-mat-tooltip.component.html',
  styleUrls: ['./e-mat-tooltip.component.scss']
})
export class EMatTooltipComponent implements OnInit {

  code:any;
  constructor(public eShareDataService : EShareDataService) {
     
    
   }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
   
  }
 

}
