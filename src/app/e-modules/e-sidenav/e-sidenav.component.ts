
import { Component, Injectable, ChangeDetectorRef, ViewChild, OnInit, HostListener, OnDestroy, ElementRef} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTree, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { Routes, RouterModule, Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ComponentList } from '../e-dashboard/component-list';
import {map, startWith} from 'rxjs/operators';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { MatSidenav } from '@angular/material/sidenav';

/**
* File node data with nested structure.
* Each node has a filename, and a type or a list of children.
*/
export class FileNode {
children?: FileNode[];
filename?: string;
type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {

constructor(
public expandable: boolean, public filename: string, public level: number, public type: any) { }
}

/**
* The file structure tree data in string. The data could be parsed into a Json object
*/
export const TREE_DATA = JSON.stringify({
Apps: {

// 'dashboard': 'dashboard',

'icons': 'icons',
'image-Gallery': 'image-Gallery',
// 'language-Switch': 'language-Switch',
'PDF-viewer': 'PDF-viewer',
'ng-PDF-Viewer':'ng-PDF-Viewer',
'search': 'search',

// 'payment-Gateway': 'payment-Gateway',
'shopping-Cart': 'shopping-Cart',

'spreadsheet': 'spreadsheet',
'exportExcel':'exportExcel',
 'text-Editor': 'text-Editor',
// 'translate':'translate',
'virtual-Scrolling': 'virtual-Scrolling',
},
Authentication: {
'forgot-Password': 'forgot-Password',
'Sign-In': 'Sign-In',
'Sign-Up': 'Sign-Up',

},
Basic_Components: {
'Accordion': 'Accordion',
'autocomplete': 'autocomplete',
'breadcrumb': 'breadcrumb',
// 'calendar': 'calendar',
'carousel': 'carousel',
'card': 'card',
'chip': 'chip',
'date-Picker': 'date-Picker',
'dialog': 'dialog',
'dragnDrop': 'dragnDrop',
'dropdown': 'dropdown',
'dual-slider': 'dual-slider',
// 'error-messages': 'error-messages',
'file-Upload': 'file-Upload',
'grid': 'grid',
'map': 'map',
'menu': 'menu',
// 'messagebox': 'messagebox',

'navigation': 'navigation',
'notification': 'notification',
'progressbar': 'progressbar',
// 'range': 'range',
'slider': 'slider',
// 'social-Media': 'social-Media',
'spinner': 'spinner',
'stepper': 'stepper',
'switch': 'switch',
'tabs': 'tabs',
// 'time-Picker': 'time-Picker',
'toast': 'toast',
'tooltip': 'tooltip',
'video': 'video',
},
Charts:{
  'bar-Chart': 'bar-Chart',
  'line-Chart': 'line-Chart',
  'Pie-Chart': 'PI-Chart'
},

Forms: {
'feedback-Forms': 'feedback-Forms',
'reactive-Forms': 'reactive-Forms',
'template-Driven-Forms': 'template-Driven-Forms',


// 'form-Validations': { 'template-Driven-Forms': 'template-Driven-Forms', 'reactive-Forms': 'reactive-Forms' },
// 'survay-Forms': 'survay-Forms',
},
Tables: {
// 'CRUD-Table': 'CRUD-Table',
// 'api-data-table': 'api-data-table',
'dataGrid': 'dataGrid',
'editable-Table': 'editable-Table',
'filter-Table': 'filter-Table',
'pagination': 'pagination',
// 'pivot-Table': 'pivot-Table',
'sortable-Table': 'sortable-Table',
'agGrid-Table':'agGrid-Table'

},
Custom_Components:{
  'alerts': 'alerts',
  'custom-dropdown': 'custom-dropdown',
  'custom-table': 'custom-table',
}

// 'angular-Bootstrap':{'bootstrap-accordian':'bootstrap-accordian'}
});

/**
* File database, it can build a tree structured Json object from string.
* Each node in Json object represents a file or a directory. For a file, it has filename and type.
* For a directory, it has filename and children (a list of files or directories).
* The input will be a json object string, and the output is a list of `FileNode` with nested
* structure.
*/
@Injectable({
  providedIn: 'root'
})
export class FileDatabase {
dataChange = new BehaviorSubject<FileNode[]>([]);

get data(): FileNode[] { return this.dataChange.value; }

constructor() {
this.initialize();
}

initialize() {
// Parse the string to json object.
const dataObject = JSON.parse(TREE_DATA);

// console.log('This is Array : ' + dataObject);
// Build the tree nodes from Json object. The result is a list of `FileNode` with nested
//     file node as children.
const data = this.buildFileTree(dataObject, 0)

// console.log(data);

// Notify the change.
this.dataChange.next(data);
}

/**
* Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
* The return value is the list of `FileNode`.
*/
buildFileTree(obj: object, level: number): FileNode[] {
return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
const value = obj[key as keyof typeof obj];
const node = new FileNode();
node.filename = key;

if (value != null) {
if (typeof value === 'object') {
node.children = this.buildFileTree(value, level + 1);
} else {
node.type = value;
}
}
return accumulator.concat(node);
}, []);
}
}

/** @title Responsive sidenav */
@Component({
selector: 'e-sidenav',
templateUrl: './e-sidenav.component.html',
styleUrls: ['./e-sidenav.component.scss'],

providers: [FileDatabase]
})
export class ESideNavComponent implements OnInit, OnDestroy {
constructor(
private database: FileDatabase,
media: MediaMatcher,
changeDetectorRef: ChangeDetectorRef,
private router: Router,
private _ActivatedRoute: ActivatedRoute,
public sharedService: EShareDataService,

) {

// console.log(this.listItems + " this is list");
this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

this.database.dataChange.subscribe(data => {
this.dataSource.data = data;
this.dataSource.data.sort();
});

this.mobileQuery = media.matchMedia('(max-width: 600px)');
this._mobileQueryListener = () => changeDetectorRef.detectChanges();
// tslint:disable-next-line: deprecation
this.mobileQuery.addListener(this._mobileQueryListener);

this._ActivatedRoute.url.subscribe(() => {
// console.log(this._ActivatedRoute.snapshot.children);
this.router.events.subscribe(event => {
if (event instanceof NavigationStart) {
this.activeUrl = event.url.replace('/', '');
// console.log(this.activeUrl)
this.autofocusElement = this.activeUrl;
// console.log('This is Active Url : ' + this.autofocusElement + "This is Components list : " + this.listItems)
}
})
});
}
mobileQuery: MediaQueryList;
seachiconDisplay: Boolean = true;
menuToggleAct:boolean = false;
searchInput: string = '';
hambergerClick: Boolean = true;
sideNavIcons: any = {
'minusSquare': 'fa fa-code'
};
options: string[] = ['One', 'Two', 'Three'];

@ViewChild('sidenav', { static: true }) sidenav: any;
navMode:any = 'side';
showMenu = true;
menuDataBackup: FileNode[] = JSON.parse(TREE_DATA);
@ViewChild('tree', { static: true }) tree : any;
private _mobileQueryListener: () => void;

treeControl: FlatTreeControl<FileFlatNode>;
treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
activeUrl: any;
listItems: any = ComponentList;
filteredOptions?: Observable<string[]>;
AutoVisibility: Boolean = false;

autofocusElement: any;
myControl = new FormControl();

searchIconClick = false;
searchFunction(){
this.searchIconClick = true;
setTimeout(function(){
document.getElementById('mySearchField')?.focus();
}, 100);
}
ngOnInit() {

if (window.innerWidth < 768) {
this.navMode = 'over';

// console.log(this.navMode)
// console.log('This is Components List : ' + this.listItems);

}
else{
  this.sidenav.open();
}

this.listItems.cards = this.myControl.valueChanges
.pipe(
startWith(''),
map(value => this._filter(value))
);

this.dividibngList();

}
private _filter(value: string) {

const filterValue = value;

if(value.length >= 3) {
return this.options.filter(option => option.toLowerCase().includes(filterValue));
} else{
return [];
}
}
clearVal(){
this.myControl.setValue('');
this.seachiconDisplay = true;
this.sharedService.activeComponent = '';
}
setdefaultComponent(){
this.clearVal();
// this.sharedService.activeComponent = '';
}

// mylink(){
//   this.myControl.value('');
// }
toggleImg(){
this.sidenav.toggle();
this.menuToggleAct === true ? this.menuToggleAct = false : this.menuToggleAct = true;
// alert(112);
}
openMenuFunction(){
this.hambergerClick === true ? this.hambergerClick = false : this.hambergerClick = true;
//this.sidenav.open();
this.sidenav.toggle();
}
onSearchChange(searchVal: string){
// alert();
if(searchVal.length > 0) {
this.seachiconDisplay = false;
} else {
this.seachiconDisplay = true;

}
// console.log(TREE_DATA.indexOf(searchVal));

}
dividibngList() {
this.options = [];
for (let i = 0; i <= this.listItems.length - 1; i++){

for (let j = 0; j <= this.listItems[i].cards.length - 1; j++) {
this.options.push(this.listItems[i].cards[j].name);
}
}
}

ngAfterViewInit() {
// this.tree.treeControl.expandAll();
if (window.innerWidth <= 768) {
this.sidenav.close();
}

}
ngAfterContentChecked(){
if (window.innerWidth <= 768) {
// alert(window.innerWidth);
// this.sidenav.close();
this.sharedService.smallscaleDevice = true;
// console.log('ngAfterContentChecked');
}

}
@HostListener('window:resize', ['$event'])
onResize(event :any) {
if (event.target.innerWidth < 768) {
this.sharedService.smallscaleDevice = true;
// console.log(event)
this.navMode = 'over';
if (this.sidenav) {
this.sidenav.close();
}

}
if (event.target.innerWidth > 768) {
this.navMode = 'side';
if (this.sidenav) {
this.sidenav.open();
}
this.sharedService.smallscaleDevice = false;

}
}
transformer = (node: FileNode, level: number) => {
return new FileFlatNode(!!node.children, node.filename!, level, node.type);
}

private _getLevel = (node: FileFlatNode) => node.level;

private _isExpandable = (node: FileFlatNode) => node.expandable;

private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children!);

hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

onMenuClick(node: any) {
this.router.navigate([`${node.filename}`])
}
setActiveComponent(activeComp: any){
// alert(activeComp);
this.sharedService.activeComponent = activeComp;
}
onSearch(value : any) {
let self = this;
this.searchInput;
function filterMenu(data :any) {
Object.keys(data).forEach(key => {
if (typeof data[key] === 'object') {
filterMenu(data[key])
} else {
if (!key.includes(self.searchInput)) {
// remove
delete data[key];
}
}
});
}
let data = JSON.parse(JSON.stringify(this.menuDataBackup));
if (this.searchInput !== '') {
filterMenu(data);
data = this.database.buildFileTree(data, 0);
this.database.dataChange.next(data);
}
}

ngOnDestroy(): void {
this.mobileQuery.removeListener(this._mobileQueryListener);
}
}

