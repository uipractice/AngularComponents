import { Component } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-formvalid',
  templateUrl: './e-mat-formvalid.component.html',
  styleUrls: ['./e-mat-formvalid.component.scss']
})
export class EMatFormValidComponent{
  email: string = "";
  password: string= "";
  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  login() : void {
    if(this.email == 'admin' && this.password == 'admin'){
    }else {
      alert("This email is not yet registered, Please register ' " + this.email+" ' before Login");
    }
  }
}
