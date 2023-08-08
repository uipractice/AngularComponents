import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'e-mat-menu',
  templateUrl: './e-mat-menu.component.html',
  styleUrls: ['./e-mat-menu.component.scss']
})
export class EMatMenuComponent implements OnInit {

  code:any;
  constructor(public eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
