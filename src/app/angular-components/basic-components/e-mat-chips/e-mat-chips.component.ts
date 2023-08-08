import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'app-e-mat-chips',
  templateUrl: './e-mat-chips.component.html',
  styleUrls: ['./e-mat-chips.component.scss']
})
export class EMatChipsComponent implements OnInit {
  code:any;
  constructor(public eShareDataService : EShareDataService) { }

  ngOnInit(): void {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
