import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-login',
  templateUrl: './e-mat-stepper.component.html',
  styleUrls: ['./e-mat-stepper.component.scss']
})
export class EMatStepperComponent {
  isLinear = false;
  isVertical = false;
   firstFormGroup: any;
   secondFormGroup: any;
   firstFormGroup1: any;
   secondFormGroup1: any;
  code:any;
  constructor(public eShareDataService : EShareDataService, private _formBuilder: FormBuilder) { 
   
  }
   
  ngOnInit() {
    
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.firstFormGroup1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup1 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }

}
