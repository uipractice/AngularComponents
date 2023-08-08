export const Code = {
    html: {
      content: `
<table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">

 <!-- Checkbox Column -->
 <ng-container matColumnDef="select">
    <th mat-header-cell *matHeaderCellDef>
      <mat-checkbox class="selectAllCheckboxClass" (change)="$event ? toggleAllRows() : null"
                    [checked]="selection.hasValue() && isAllSelected()"
                    [indeterminate]="selection.hasValue() && !isAllSelected()"
                    [aria-label]="checkboxLabel()">
      </mat-checkbox>
    </th>
    <td mat-cell *matCellDef="let row">
      <mat-checkbox (click)="$event.stopPropagation()"
                    (change)="$event ? selection.toggle(row) : null"
                    [checked]="selection.isSelected(row)"
                    [aria-label]="checkboxLabel(row)">
      </mat-checkbox>
    </td>
  </ng-container>

 <!-- Position Column -->
 <ng-container matColumnDef="position">
	<th mat-header-cell *matHeaderCellDef>No.</th>
	<td mat-cell *matCellDef="let element">{{element.position}}</td>
</ng-container>


 <!-- Name Column -->
 <ng-container matColumnDef="name">
	 <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
	 <td mat-cell *matCellDef="let element"> {{element.name}} </td>
 </ng-container>

 <!-- Weight Column -->
 <ng-container matColumnDef="weight">
	 <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>
	 <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
 </ng-container>

 <!-- Symbol Column -->
 <ng-container matColumnDef="symbol">
	 <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>
	 <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
 </ng-container>

 <!-- delete Column -->
  <ng-container matColumnDef="edit">
    <th mat-header-cell *matHeaderCellDef> Edit </th>
    <td mat-cell *matCellDef="let element"> 
      <button mat-icon-button color="primary">
        <mat-icon class="mat-18">edit</mat-icon> 
      </button>
    </td>
  </ng-container>

  <!-- delete Column -->
  <ng-container matColumnDef="delete">
	<th mat-header-cell *matHeaderCellDef> Delete </th>
	<td mat-cell *matCellDef="let element"> 
		<button mat-icon-button color="warn" (click)="deleteRow(element)">
			<mat-icon class="mat-18">delete</mat-icon> 
		</button>
	</td>
</ng-container>

 <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
 <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

  `,
      language: 'html'
    },
    ts: {
      content: `
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
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

 displayedColumns: string[] = ['select','position', 'name', 'weight', 'symbol', 'edit', 'delete'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);
 selection = new SelectionModel<PeriodicElement>(true, []);
   @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private eShareDataService : EShareDataService,
              private alertMessageService : AlertMessageService) { }
  ngOnInit() {
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
      return $\{this.isAllSelected() ? 'deselect' : 'select'} all\;
    }
    return $\{this.selection.isSelected(row) ? 'deselect' : 'select'}\ row $\{row.position + 1}\;
  }

  deleteRow(element){  

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

      `,
    language: 'javascript'
  },
    css: {
      content: `
      table {
        width: 100%;
      }
      
      th.mat-sort-header-sorted {
        color: black;
      }
      th.mat-header-cell{
        background:#0D0D0D;
        color:#fff;
        font-weight: bold;
      }
    :host ::ng-deep .selectAllCheckboxClass .mat-checkbox-frame { 
      border-color:  white;
    }
`,
      language: 'css'
    },
    bootstrapHtml:{
      content:`
      <!-- There is no HTML code for Bootstrap -->
      `,
      language: 'HTML'
    },
    bootstrapTS:{
      content:`
      /* There is no TS code for Bootstrap */
      `,
      language: 'TS'
    },
    bootstrapCSS:{
      content:`
      /* There is no CSS code for Bootstrap*/
      `,
      language: 'CSS'
    }
  }
