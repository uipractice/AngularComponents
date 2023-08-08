import { Component, OnInit } from '@angular/core';

import { Code } from './code';
import { EShareDataService } from '../../../e-shared/e-sharedata.service'

@Component({
  selector: 'app-e-dual-range-slider',
  templateUrl: './e-dual-range-slider.component.html',
  styleUrls: ['./e-dual-range-slider.component.scss']
})
export class EDualRangeSliderComponent implements OnInit {
  currencySymbol:any = "$";
  from:any = 0;
  to:any = 1000;
  code: any;

  constructor(private eShareDataService: EShareDataService) {
    this.code = Code;
  }

  ngOnInit() {
    this.eShareDataService.pushCode(this.code);
    // console.log(this.code)
  }

  myOnFinish(event: any) {
    this.from = event.from;
    this.to = event.to;
  }

}
