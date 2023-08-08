import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-login',
  templateUrl: './e-mat-login.component.html',
  styleUrls: ['./e-mat-login.component.scss']
})
export class EMatLoginComponent {
  username: string= "";
  password: string= "";
  loginFormMat:FormGroup;
  loginFormBoots:FormGroup;
  //userFormVal;
  code:any;
  constructor(private fb: FormBuilder,public eShareDataService : EShareDataService, ) {

    this.loginFormMat = fb.group({
        'username':['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$'),Validators.minLength(4), Validators.maxLength(16)])],
        'password':['', Validators.compose([Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'),Validators.minLength(8), Validators.maxLength(16)])]
    });
    this.loginFormBoots = fb.group({
      'username':['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$'),Validators.minLength(4), Validators.maxLength(16)])],
      'password':['', Validators.compose([Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'), Validators.minLength(8), Validators.maxLength(16)])]
    });
   
  }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  
}
