import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentList } from './component-list';
import { EAnimationService } from '../../e-shared/e-animation.service';
import { Router } from '@angular/router';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
@Component({
  selector: 'e-dashboard',
  templateUrl: './e-dashboard.component.html',
  styleUrls: ['./e-dashboard.component.scss'],
  host: EAnimationService.host,
  animations: EAnimationService.page
})
export class EDashboardComponent implements OnInit, OnDestroy {
  componentName: string = "";
  list: any = [];
  // colorCodes: any = ["#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333","#333", ]
  constructor(private router: Router, public sharedService:EShareDataService) {

  }
  item:any
  codeItem:any = 0;
  ngOnInit() {
    this.list = ComponentList;
  //   this.list.sort((a, b) => {
  //   if (a.id < b.id) return -1;
  //   else if (a.id > b.id) return 1;
  //   else return 0;
  // });

    // if (this.list) {
    //   for (this.item = 0; this.item < this.list.length; this.item++) {
    //     for (let j = 0; j < this.colorCodes.length; j++) {
    //       this.list[j].background = this.colorCodes[j];
    //     }
    //     if (this.item >= this.colorCodes.length) {
    //       this.list[this.item].background = this.colorCodes[this.codeItem];
    //       this.codeItem++;
    //       continue;
    //     }
    //   }
    // }
    // console.log(this.list);
  }
  openComponent(item: any) {
    console.log('item',item);
    
    this.router.navigate([item.link]);
    this.sharedService.getcomponentName(item.name)
    
  }
ngOnDestroy(){
  this.list = [];
}
}
