import { Injectable } from '@angular/core';
import { Storage } from './utils/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject ,  Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EShareDataService {
public subject = new Subject<any>();
public messageSource = new BehaviorSubject('default message');
currentMessage = this.messageSource.asObservable();
activeComponent: string = '';
materialpCode = true;
bootstrapCode = false;
nobootstrapnmaterialCode = false;
codeDumpname: string = 'Material';
smallscaleDevice: Boolean = false;
notApplicableComponents = ['/stepper', '/map', '/navigation', '/autocomplete', '/date-Picker', '/slider', '/switch', '/toast',
'/table-Inline-Edit', '/tooltip', '/template-Driven-Forms', '/exportExcel', '/reactive-Forms', '/dataGrid', '/filter-Table', '/pagination',
'/sortable-Table', '/editable-Table', '/time-Picker', '/feedback-Forms', '/API-data-table', '/survey-Form', '/shopping-Cart'];
noBootstrapnMaterialComponents = ['/PDF-viewer', '/ng-PDF-Viewer', '/agGrid-Table', '/bar-Chart', '/line-Chart', '/Pie-Chart', '/carousel',
 '/dual-slider', '/video', '/image-Gallery', '/text-Editor', '/dragnDrop-list', '/social-Media', '/CRUD-Table' ];
onlyBootstrapComponents = ['/language-Switch', '/virtual-Scrolling', '/breadcrumb'];
constructor(private _domSanitizer: DomSanitizer, private _snackBarService: MatSnackBar) {}
materialDisplay() {
  this.materialpCode = true;
  this.bootstrapCode = false;
  this.nobootstrapnmaterialCode = false;
  this.codeDumpname = 'Material';
  }
  bootstrapDisplay(){
  this.materialpCode = false;
  this.bootstrapCode = true;
  this.nobootstrapnmaterialCode = false;
  this.codeDumpname = 'Bootstrap';
  }
changeMessage(message: string) {
this.messageSource.next(message)
}
get(key: any) {
return Storage.getSessionItem(key);
}

set(key: any, val: any) {
Storage.setSessionItem(key, val);
}
clearData() {
Storage.clearSession();
}
removeKey(key: any) {
Storage.removeSessionItem(key);
}
pushCode(code: any) {
return this.subject.next(code);
}
getCode(): Observable<any> {
return this.subject.asObservable();
}
showMessage(message: string) {
this._snackBarService.open(message, 'x', { duration: 3000 });
}
bypassURL(url: string) {
return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
}
getcomponentName(name: any){
this.activeComponent = name;
}
}
