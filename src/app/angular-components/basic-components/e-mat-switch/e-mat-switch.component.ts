import { Component, OnInit } from '@angular/core';


import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'e-mat-switch',
  templateUrl: './e-mat-switch.component.html',
  styleUrls: ['./e-mat-switch.component.scss']
})
export class EMatSwitchComponent implements OnInit {

  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
