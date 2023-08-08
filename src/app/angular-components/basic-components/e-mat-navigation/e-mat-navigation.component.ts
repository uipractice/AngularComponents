import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'app-e-mat-navigation',
  templateUrl: './e-mat-navigation.component.html',
  styleUrls: ['./e-mat-navigation.component.scss']
})
export class EMatNavigationComponent implements OnInit {
  showFiller = false;

  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
