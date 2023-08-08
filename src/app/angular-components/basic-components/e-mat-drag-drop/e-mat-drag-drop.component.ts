import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'e-mat-image-gallery',
  templateUrl: './e-mat-drag-drop.component.html',
  styleUrls: ['./e-mat-drag-drop.component.scss']
})
export class EMatDragDropComponent implements OnInit {
  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
container1:any = [
  {type:'text', name:'Text Field', class:'example-full-width border-btm'},
  {type:'email', name:'Email', class:'example-full-width border-btm'},
  {type:'password', name:'Password', class:'example-full-width border-btm'},
  {type:'button', name:'Button', class:'example-full-width'},
  {type:'checkbox', name:'Checkbox', class:'example-full-width border-btm'},
  {type:'radio', name:'radio', class:'example-full-width border-btm'}
];
container2:any = [];
container3:any = [];


drop(event: CdkDragDrop<string[]>) {
 if (event.previousContainer === event.container) {
  moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
} else {
  this.container1=[];
  this.container1.push(
    {type:'text', name:'Text Field', class:'example-full-width border-btm'},
    {type:'email', name:'Email', class:'example-full-width border-btm'},
    {type:'password', name:'Password', class:'example-full-width border-btm'},
    {type:'button', name:'Button', class:'example-full-width'},
    {type:'checkbox', name:'Checkbox', class:'example-full-width border-btm'},
    {type:'radio', name:'radio', class:'example-full-width border-btm'});
   transferArrayItem(event.previousContainer.data,
                     event.container.data,
                     event.previousIndex,
                     event.currentIndex);
 }
}
 
}
