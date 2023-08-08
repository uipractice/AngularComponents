
import { Component, OnInit,HostListener} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Code } from './code';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
@Component({
selector: 'app-dragndrop',
templateUrl: './dragndrop.component.html',
styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent implements OnInit {
// isItemSelected;
// selectItem;
selectedIndex: number=0;
select(index: number) {
this.selectedIndex = index;
}

list1 = [
'Get to work',
'Pick up groceries',
'Go home',
'Fall asleep',
'Work from home'
];

list2 = [
'Get up',
'Brush teeth',
'Take a shower',
'Check e-mail',
'Walk dog'
];


 selecteditemArray: string[] = [];
item = [];
isKeyPressed:boolean=false;

@HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
if (event.ctrlKey) {
this.isKeyPressed= true;
}
else{
this.isKeyPressed = false;
}
}
addThisitemToArray(item: any){
//alert('hello');
if(this.isKeyPressed ==  false){
this.selecteditemArray =[]; //clear array coz ctrl not pressed it selectedPerson should only be one.
}
this.selecteditemArray.push(item);
}

//check if person exist in the array return if true otherwise false. 
// return of true will make the row active thus changing the color and 
// indicating it is selected

isitemSelected(item: any){
if(this.selecteditemArray.indexOf(item) != -1){  
return true;
}
return false;
}

drop(event: CdkDragDrop<string[]>) {
if (event.previousContainer === event.container) {
moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
} else {
transferArrayItem(event.previousContainer.data,
event.container.data,
event.previousIndex,
event.currentIndex);
}
}
code: any;
constructor(public eShareDataService: EShareDataService ) { }

ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
}

}
