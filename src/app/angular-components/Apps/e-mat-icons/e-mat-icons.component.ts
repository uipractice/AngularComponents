import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-e-mat-login',
  templateUrl: './e-mat-icons.component.html',
  styleUrls: ['./e-mat-icons.component.scss']
})
export class EMatIconsComponent {
  username: string="";
  password: string="";
  code:any;
  constructor(public eShareDataService : EShareDataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon('accessibility',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-accessibility-24px.svg'));
  iconRegistry.addSvgIcon('accessible_forward',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-accessible_forward-24px.svg'));
  iconRegistry.addSvgIcon('accessible',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-accessible-24px.svg'));
  iconRegistry.addSvgIcon('account_balance_wallet',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-account_balance_wallet-24px.svg'));
  iconRegistry.addSvgIcon('account_balance',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-account_balance-24px.svg'));
   }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
    }else {
      alert("Invalid credentials");
    }
  }
}
