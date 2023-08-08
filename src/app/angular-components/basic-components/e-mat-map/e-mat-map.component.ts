import { Component, OnInit } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-map',
  templateUrl: './e-mat-map.component.html',
  styleUrls: ['./e-mat-map.component.scss']
})
export class EMatMapComponent implements OnInit {
  title: string = 'Maps in Angular';
  lat: number =  17.434832;
  lng: number =  78.384815;
  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
