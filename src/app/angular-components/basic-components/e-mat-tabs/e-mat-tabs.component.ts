import { Component, OnInit } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'e-mat-tabs',
  templateUrl: './e-mat-tabs.component.html',
  styleUrls: ['./e-mat-tabs.component.scss']
})
export class EMatTabsComponent implements OnInit {

  code:any;
  constructor(public eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
