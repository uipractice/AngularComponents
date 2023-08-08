export const Code = {
  html: {
    content: ` 
 <div class="example-container mat-elevation-z8">
	<div class="example-header">
		<mat-form-field>
			<input matInput #filter (keyup)="applyFilter($event.target.value)" placeholder="Filter">
			<button mat-icon-button matSuffix aria-label="clear" *ngIf="filter.value" (click)="filter.value=''; applyFilter('');">
        <mat-icon>close</mat-icon>
      </button>
		</mat-form-field>
	</div>

	<mat-table #table [dataSource]="dataSource">

		<!-- Position Column -->
		<ng-container matColumnDef="position">
			<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
			<mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
		</ng-container>

		<!-- Name Column -->
		<ng-container matColumnDef="name">
			<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
			<mat-cell *matCellDef="let element">
				<mat-form-field floatLabel="never">
					<input matInput placeholder="Name" [value]="element.name" [(ngModel)]="element.name">
				</mat-form-field>
			</mat-cell>
		</ng-container>

		<!-- Weight Column -->
		<ng-container matColumnDef="weight">
			<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
			<mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
		</ng-container>

		<!-- Symbol Column -->
		<ng-container matColumnDef="symbol">
			<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
			<mat-cell *matCellDef="let element">
				<mat-form-field floatLabel="never">
					<input matInput placeholder="Symbol" [value]="element.symbol" [(ngModel)]="element.symbol">
				</mat-form-field>
			</mat-cell>
		</ng-container>

		<!-- Fav Column -->
		<ng-container matColumnDef="fav">
			<mat-header-cell *matHeaderCellDef> Favorite </mat-header-cell>
			<mat-cell *matCellDef="let element">
				<mat-form-field floatLabel="never">
					<mat-select [(value)]="element.fav" placeholder="Favorite">
						<mat-option>None</mat-option>
						<mat-option value="Yes">Yes</mat-option>
					</mat-select>
				</mat-form-field>
			</mat-cell>
		</ng-container>

		<mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
		<mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
	</mat-table>
</div>
  `,
    language: 'html'
  },
  ts: {
    content: `
      import { Component} from '@angular/core';
      import { MatTableDataSource } from '@angular/material';
      
      @Component({
        selector: 'app-e-mat-inline-edit-table',
        templateUrl: './e-mat-inline-edit-table.component.html',
        styleUrls: ['./e-mat-inline-edit-table.component.scss']
      })
      export class EMatInlineEditTableComponent {
        displayedColumns = ['position', 'name', 'weight', 'symbol', 'fav'];
        dataSource = new MatTableDataSource(ELEMENT_DATA);
      
       
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
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', fav: "" },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', fav: "" },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', fav: "" },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', fav: "" },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', fav: "" },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', fav: "" },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', fav: "" },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', fav: "" },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', fav: "" },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', fav: "" },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', fav: "" },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', fav: "" },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', fav: "" },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', fav: "" },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', fav: "" },
      ];
        `,
    language: 'javascript'
  },
  css: {
    content: `
/* Structure */
.example-container {
    display: flex;
    flex-direction: column;
    min-width: 300px;
  }
  
  .example-header {
    min-height: 64px;
    padding: 8px 24px 0;
  }
  
  .mat-form-field {
    font-size: 14px;
    width: 100%;
  }
  
  .mat-table {
    overflow: auto;
    max-height: 750px;
  }
  .mat-header-cell{
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