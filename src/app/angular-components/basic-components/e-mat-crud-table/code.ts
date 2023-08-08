export const Code = {
    html: {
        content: `
  <mat-card class="example-card">
  <h4 class="m-t-15">CRUD in Table (Create, Read, Update, Delete)</h4>
  <table class="table table-bordered">
  <tr>
  <th>Item Name</th>
  <th>Cost</th>
  <th colspan="2">Operation</th>
  </tr>
  <tr *ngFor="let x of dataSource">
  <td>{{x.name}}</td>
  <td>{{x.cost}}</td>
  <td width="100"><button class="btn btn-primary btn-block" (click)="editRecord(x)">Edit</button></td>
  <td width="100"><button class="btn btn-danger btn-block" (click)="deleteRecord(x)">Delete</button></td>
  </tr>
  <tr>
  <td><input type="text" class="form-control" [(ngModel)]="nameVal" placeholder="Item Name"/></td>
  <td><input type="text" class="form-control" [(ngModel)]="costVal" (keypress)="numberOnly($event)" placeholder="Item Cost"/></td>
  <td colspan="2">
  <button class="btn btn-block" (click)="addRecord();" *ngIf="!update">Add</button>
  <button class="btn btn-block" (click)="updateRecord();" *ngIf="update">Update</button>
  </td>
  </tr>
  </table>
  </mat-card>
    `,
        language: 'html'
        },
    ts: {
        content: `
  import { Component} from '@angular/core';

  @Component({
  selector: 'app-e-mat-CRUD',
  templateUrl: './e-mat-crud-table.component.html',
  styleUrls: ['./e-mat-crud-table.component.scss']
  })
  export class EMatCrudTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = [
  { name: 'Hydrogen', cost:1000},
  { name: 'Helium',  cost:2000},
  { name: 'Lithium', cost:3000},
  { name: 'Beryllium', cost:4000},
  { name: 'Boron', cost:5000},
  { name: 'Carbon', cost:6000},
  { name: 'Nitrogen', cost:7000},
  { name: 'Oxygen', cost:8000},
  { name: 'Fluorine', cost:9000},
  {  name: 'Neon', cost:10000},
  ];
  code:any;
  nameVal:any='';
  costVal:any='';
  update:boolean = false;
  indexVal:number;
  dataSource;
  constructor() {
  if(localStorage.getItem("myTblData") == null){
  localStorage.setItem('myTblData', JSON.stringify(this.dataSource1));
  this.dataSource = JSON.parse(localStorage.getItem('myTblData'));
  }else{
  this.dataSource = JSON.parse(localStorage.getItem('myTblData'));
  }
  }

  ngOnInit() { }
  addRecord(){
  if(this.nameVal!='' && this.costVal!=''){
  this.dataSource.push({name:this.nameVal, cost:this.costVal});
  localStorage.setItem('myTblData', JSON.stringify(this.dataSource));
  this.nameVal='';
  this.costVal='';
  }
  }
  editRecord(x){
  this.indexVal = this.dataSource.indexOf(x);
  this.nameVal = this.dataSource[this.dataSource.indexOf(x)].name;
  this.costVal = this.dataSource[this.dataSource.indexOf(x)].cost;
  this.update=true;
  }
  updateRecord(){
  this.dataSource[this.indexVal].name = this.nameVal;
  this.dataSource[this.indexVal].cost = this.costVal;
  this.update=false;
  this.nameVal='';
  this.costVal='';
  localStorage.setItem('myTblData', JSON.stringify(this.dataSource));
  }
  deleteRecord(x){
  alert("Are you sure to delete?");
  this.dataSource.splice(this.dataSource.indexOf(x),1);
  localStorage.setItem('myTblData', JSON.stringify(this.dataSource));
  this.update=false;
  }
  numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  return false;
  }
  return true;
  }
  }
        
    `,
        language: 'javascript'
        },
    css: {
        content: `    
  .table th{
  background:  #ff9933;
  color:#fff;
  font-weight: bold;
  border-color: #ff9933;
  } `,
        language: 'css'
        }
    }

       