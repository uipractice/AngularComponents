import { Component, OnInit } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'app-e-mat-card',
  templateUrl: './e-mat-card.component.html',
  styleUrls: ['./e-mat-card.component.scss']
})
export class EMatCardComponent implements OnInit {
  code:any;
  constructor(public eShareDataService : EShareDataService) { }

  ngOnInit(): void {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
