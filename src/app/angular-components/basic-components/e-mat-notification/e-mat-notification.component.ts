import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'app-e-mat-navigation',
  templateUrl: './e-mat-notification.component.html',
  styleUrls: ['./e-mat-notification.component.scss']
})
export class EMatNotificationComponent implements OnInit {
  showFiller = false;

  code:any;
  constructor(public eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
