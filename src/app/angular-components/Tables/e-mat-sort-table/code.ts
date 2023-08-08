export const Code = {
    html: {
      content: `
      <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">

     <!-- Position Column -->
     <ng-container matColumnDef="position">
       <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>
       <td mat-cell *matCellDef="let element"> {{element.position}} </td>
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

     <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
     <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
     </table>
  `,
      language: 'html'
    },
    ts: {
      content: `
      import { Component, OnInit,ViewChild} from '@angular/core';
      import { MatTableDataSource } from '@angular/material';

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
        selector: 'app-e-mat-inline-edit-table',
        templateUrl: './e-mat-sort-table.component.html',
        styleUrls: ['./e-mat-sort-table.component.scss']
      })
      export class EMatSortTableComponent implements OnInit {
        displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
       dataSource = new MatTableDataSource(ELEMENT_DATA);
         @ViewChild(MatSort) sort: MatSort;
        constructor(private eShareDataService : EShareDataService) { }
        ngOnInit() {  this.dataSource.sort = this.sort; }}
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
