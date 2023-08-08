import { Component, OnInit } from '@angular/core';

import { Code } from './code';
import { EShareDataService } from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-grid',
  templateUrl: './e-mat-grid.component.html',
  styleUrls: ['./e-mat-grid.component.scss']
})
export class EMatGridComponent implements OnInit {

  code: any;
  constructor(public eShareDataService: EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
