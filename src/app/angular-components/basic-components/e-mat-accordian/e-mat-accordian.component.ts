import { Component, OnInit } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service'
@Component({
  selector: 'app-e-mat-accordian',
  templateUrl: './e-mat-accordian.component.html',
  styleUrls: ['./e-mat-accordian.component.scss']
})
export class EMatAccordianComponent implements OnInit {
  code:any;
  angleDown = true;
  constructor(public eShareDataService : EShareDataService) { }
  panelOpenState = false;
  panelOpenState1 = false;
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    // console.log(this.code)
  }
  arrowFunction(){ 
    this.angleDown?this.angleDown = false :  this.angleDown = true
  }
}
