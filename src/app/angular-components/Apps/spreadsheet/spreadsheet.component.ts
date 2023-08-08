import { Component, OnInit } from '@angular/core';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { Code } from './code';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {
  code: any;
  constructor(public eShareDataService: EShareDataService) { }

  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
