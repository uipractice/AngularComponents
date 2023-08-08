export const Code = {
    html: {
        content: `
      
  
        <div  #TABLE>
        <table mat-table  #table
               [dataSource]="dataSource" multiTemplateDataRows
               class="mat-elevation-z8">
          <ng-container matColumnDef="{{column}}" *ngFor="let column of columnsToDisplay">
            <th mat-header-cell *matHeaderCellDef> {{column}} </th>
            <td mat-cell *matCellDef="let element"> {{element[column]}} </td>
          </ng-container>
        
          <ng-container matColumnDef="expandedDetail">
            <td mat-cell *matCellDef="let element" [attr.colspan]="columnsToDisplay.length">
              <div class="example-element-detail"
                   [@detailExpand]="element == expandedElement ? 'expanded' : 'collapsed'">
                <div class="example-element-diagram">
                  <div class="example-element-position"> {{element.position}} </div>
                  <div class="example-element-symbol"> {{element.symbol}} </div>
                  <div class="example-element-name"> {{element.name}} </div>
                </div>
                <div class="example-element-description">
                  {{element.description}}
                  <span class="example-element-description-attribution"> -- Wikipedia </span>
                </div>
              </div>
            </td>
          </ng-container>
        
          <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
          <tr mat-row *matRowDef="let element; columns: columnsToDisplay;"
              class="example-element-row"
              [class.example-expanded-row]="expandedElement === element"
              (click)="expandedElement = expandedElement === element ? null : element"
             >
          </tr>
          <ng-container *ngIf="!exportActive">
            <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="example-detail-row"></tr>
          </ng-container>
        </table>
        </div>
        <button mat-raised-button style="background-color: #0088D1; margin-top: 10px; color: white;" (click)="export()">Export as Excel</button>
        <button mat-raised-button style="background-color: #0088D1; margin-top: 10px; color: white;margin-left: 20px;" (click)="exportPDF()">Export as PDF</button>
    
        `,
        language: 'html'
        },
    ts: {
        content: `
        import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
        import * as XLSX from 'xlsx';
        import { Code } from './code';
        import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
        import {animate, state, style, transition, trigger} from '@angular/animations';
        @Component({
            selector: 'app-exportexcel',
            templateUrl: './exportexcel.component.html',
            styleUrls: ['./exportexcel.component.scss'],
            animations: [
              trigger('detailExpand', [
                state(
                  'collapsed',
                  style({ height: '0px', minHeight: '0', display: 'none' })
                ),
                state('expanded', style({ height: '*' })),
                transition(
                  'expanded <=> collapsed',
                  animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
                ),
              ]),
            ],
          
          })
          
          export class ExportexcelComponent  implements OnInit {
            code:any
            
            constructor(private eSharedDataService:EShareDataService) { }
          
            
            ngOnInit(): void {
              this.code=Code
              this.eSharedDataService.pushCode(this.code);
              console.log('aggrid wodsaf');
              
                
            } 
            dataSource = ELEMENT_DATA;
            columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
            expandedElement!: PeriodicElement | null;
            @ViewChild('TABLE') table!: ElementRef;
            exportActive: boolean = false;
            export() {
              this.exportActive = true;
              const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
                this.table.nativeElement
              );
              const wb: XLSX.WorkBook = XLSX.utils.book_new();
              XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
          
              /* save to file */
              XLSX.writeFile(wb, 'SheetJS.xlsx');
            }
            exportPDF(){
              let DATA: any = this.table.nativeElement;
              html2canvas(DATA).then((canvas) => {
                let fileWidth = 208;
                let fileHeight = (canvas.height * fileWidth) / canvas.width;
                const FILEURI = canvas.toDataURL('image/png');
                let PDF = new jsPDF('p', 'mm', 'a4');
                let position = 0;
                PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
                PDF.save('exportTablePDF.pdf');
              });
            }
          }
          export interface PeriodicElement {
            name: string;
            position: number;
            weight: number;
            symbol: string;
            description: string;
          }
          const ELEMENT_DATA: PeriodicElement[] = [
            {
                position: 1,
                name: 'Hydrogen',
                weight: 1.0079,
                symbol: 'H',
                description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
                    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.",
              },
              {
                position: 2,
                name: 'Helium',
                weight: 4.0026,
                symbol: 'He',
                description: Helium is a chemical element with symbol He and atomic number 2. It is a
                    colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
                    group in the periodic table. Its boiling point is the lowest among all the elements.,
              },
              {
                position: 3,
                name: 'Lithium',
                weight: 6.941,
                symbol: 'Li',
                description: Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
                    silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
                    lightest solid element.,
              },
              {
                position: 4,
                name: 'Beryllium',
                weight: 9.0122,
                symbol: 'Be',
                description: Beryllium is a chemical element with symbol Be and atomic number 4. It is a
                    relatively rare element in the universe, usually occurring as a product of the spallation of
                    larger atomic nuclei that have collided with cosmic rays.,
              },
              {
                position: 5,
                name: 'Boron',
                weight: 10.811,
                symbol: 'B',
                description: Boron is a chemical element with symbol B and atomic number 5. Produced entirely
                    by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
                    low-abundance element in the Solar system and in the Earth's crust.
              },
            ]
        `,
        language: 'javascript'
        },
    css: {
        content: `
        table {
            width: 100%;
          }
          
          tr.example-detail-row {
            height: 0;
          }
          
          tr.example-element-row:not(.example-expanded-row):hover {
            background: #f5f5f5;
          }
          
          tr.example-element-row:not(.example-expanded-row):active {
            background: #efefef;
          }
          
          .example-element-row td {
            border-bottom-width: 0;
          }
          
          .example-element-detail {
            overflow: hidden;
            display: flex;
          }
          
          .example-element-diagram {
            min-width: 80px;
            border: 2px solid black;
            padding: 8px;
            font-weight: lighter;
            margin: 8px 0;
            height: 104px;
          }
          
          .example-element-symbol {
            font-weight: bold;
            font-size: 40px;
            line-height: normal;
          }
          
          .example-element-description {
            padding: 16px;
          }
          
          .example-element-description-attribution {
            opacity: 0.5;
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
