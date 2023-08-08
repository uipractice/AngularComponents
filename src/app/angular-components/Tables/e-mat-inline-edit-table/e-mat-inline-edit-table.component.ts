import { Component, OnInit} from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-e-mat-inline-edit-table',
  templateUrl: './e-mat-inline-edit-table.component.html',
  styleUrls: ['./e-mat-inline-edit-table.component.scss']
})
export class EMatInlineEditTableComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'fav'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  getValueOnKeyup(event: Event){
    this.applyFilter((event.target as HTMLInputElement).value);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  fav: string;
}
const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fav: "Yes" },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', fav: "" },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', fav: "" },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', fav: "" },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', fav: "Yes" },
   
];