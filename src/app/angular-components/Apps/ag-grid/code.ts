export const Code = {
    html: {
        content: `<div #aggriTable>
        <mat-card class="m-t-15"  *ngIf="!eShareDataService.bootstrapCode">
      
          <ag-grid-angular
             style="width: 100%; height: 350px;"
             class="ag-theme-alpine"
             [rowData]="rowData"
             [columnDefs]="columnDefs"
            >
         </ag-grid-angular>
         </mat-card>
       </div>
           `,
        language: 'html'
        },
    ts: {
        content: `import { HttpClient } from '@angular/common/http';
        import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
        import {  ColDef,GridApi,} from 'ag-grid-community';
        import {animate, state, style, transition, trigger} from '@angular/animations';
        import {EShareDataService} from '../../../e-shared/e-sharedata.service';
        import { Code } from './code';
        
        
        
        
        
        @Component({
          selector: 'app-ag-grid',
          templateUrl: './ag-grid.component.html',
          styleUrls: ['./ag-grid.component.scss'],
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
        export class AgGridComponent implements OnInit{
          code:any
          gridApi!:GridApi
          exportActive: boolean = false;
          @ViewChild('aggriTable') table!: ElementRef;
        
        
          
          constructor(private http: HttpClient,public eShareDataService : EShareDataService) { }
          ngOnInit(): void {
            this.code=Code
            this.eShareDataService.pushCode(this.code);
            
              
          }
          
        
        
        columnDefs: ColDef[] = [
          { field: 'make' },
          { field: 'model' },
          { field: 'price' },
          {field:'variant'}
        ];
        
        rowData = [
          { make: 'Toyota', model: 'Celica', price: 35000,variant:'petrol' },
          { make: 'Ford', model: 'Mondeo', price: 32000,variant:'diesel' },
          { make: 'Porsche', model: 'Boxster', price: 72000,variant:'petrol' }
        ];
        
        
        
        }
         
  `,
        language: 'javascript'
        },
    css: {
        content: `/* There is no CSS code */
            `,
        language: 'css'
        },
        bootstrapHtml:{
          content:`
         
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
          
          `,
          language: 'CSS'
        }
    }
