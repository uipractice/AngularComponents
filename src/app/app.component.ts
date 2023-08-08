import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {EShareDataService} from './e-shared/e-sharedata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(public viewRef : ViewContainerRef,  private _iconRegistry: MatIconRegistry,private eShareDataService:EShareDataService) { }
  item:any;
  ngOnInit(){
    this._iconRegistry.addSvgIconSetInNamespace('core',
      this.eShareDataService.bypassURL('/assets/icons/app-icons.svg'));
      // this.loadIcons();
  };
//   loadIcons(){
//     this.item = ComponentList;
//     console.log('This is icon Name'+this.item)
//     for(var i = 0; i<=this.item.length; i++){

//     }
    
// }
ngOnDestroy(){

}
}
