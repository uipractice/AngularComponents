import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'e-mat-progressbar',
  templateUrl: './e-mat-progressbar.component.html',
  styleUrls: ['./e-mat-progressbar.component.scss']
})
export class EMatProgressbarComponent implements OnInit {

  code:any;
  constructor(public eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
