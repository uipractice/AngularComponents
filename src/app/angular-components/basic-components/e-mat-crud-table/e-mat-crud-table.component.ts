import { Component} from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
//import { PersistenceService } from 'angular-persistence';

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
  indexVal:number=0;
  dataSource;
  constructor(private eShareDataService : EShareDataService) {
    if(localStorage.getItem("myTblData") == null){
      localStorage.setItem('myTblData', JSON.stringify(this.dataSource1));
      this.dataSource = JSON.parse(localStorage.getItem('myTblData') ||'{}' );
    }else{
      this.dataSource = JSON.parse(localStorage.getItem('myTblData')||'{}');
    }
   }

  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  addRecord(){
    if(this.nameVal!='' && this.costVal!=''){
      this.dataSource.push({name:this.nameVal, cost:this.costVal});
      localStorage.setItem('myTblData', JSON.stringify(this.dataSource));
      this.nameVal='';
      this.costVal='';
    }
  }
  editRecord(x: any){
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
  deleteRecord(x: any){
    alert("Are you sure to delete?");
    this.dataSource.splice(this.dataSource.indexOf(x),1);
    localStorage.setItem('myTblData', JSON.stringify(this.dataSource));
    this.update=false;
  }
  numberOnly(event: any): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
      }
      return true;
   }
}
