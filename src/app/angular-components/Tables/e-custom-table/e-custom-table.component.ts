import { Component, OnInit, ViewChild } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
import { MatSort , Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { AlertMessageService} from '../../../e-shared/alert-message.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-e-custom-table',
  templateUrl: './e-custom-table.component.html',
  styleUrls: ['./e-custom-table.component.scss']
})
export class ECustomTableComponent implements OnInit {

  code:any;
  displayedColumns: string[] = ['select','position', 'name', 'weight', 'symbol', 'edit', 'delete'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);
 selection = new SelectionModel<PeriodicElement>(true, []);
 @ViewChild('sort') sort = new MatSort();
  constructor(private eShareDataService : EShareDataService,
              private alertMessageService : AlertMessageService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    this.dataSource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  deleteRow(element: any){  

    const userResponse = this.alertMessageService.openConfirmDialog("Are you sure you want to delete this record?", "help_outline", false);
    userResponse.then((value)=>{
      if(value == "ok"){
        ELEMENT_DATA.splice(ELEMENT_DATA.indexOf(element),1);
        this.dataSource.data = ELEMENT_DATA;
        this.dataSource.sort = this.sort;
      }
    });
  }
}
