import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-register',
  templateUrl: './e-mat-register.component.html',
  styleUrls: ['./e-mat-register.component.scss']
})
export class EMatRegisterComponent{
registerForm:FormGroup;
registerFormBootstrap:FormGroup;
  code:any;
  constructor(private fb: FormBuilder,public eShareDataService : EShareDataService, ) {

    this.registerForm = fb.group({
      'fname': [null, Validators.required],
      'lname': [null, Validators.required],
        'email': [null, Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
        'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{10}")])],
        'password':[null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16)])],
        'cnfrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16)])]
    });
    this.registerFormBootstrap = fb.group({
      'fname': [null, Validators.required],
      'lname': [null, Validators.required],
        'email': [null, Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
        'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{10}")])],
        'password':[null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16)])],
        'cnfrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16)])]
    });
  }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  registerFormVal(data: any){
    if(data.password === data.cnfrmpassword){
      alert('Registered Successfully');
    }else{
      alert('Please check once Password and Confirm Password should be same');
    }
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
 }
}
