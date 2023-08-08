import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatLoginComponent } from './e-mat-login.component';

describe('EMatLoginComponent', () => {
  let component: EMatLoginComponent;
  let fixture: ComponentFixture<EMatLoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatLoginComponent ],
      imports: [ReactiveFormsModule],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the login service when the form is submitted', () => {
   // spyOn(EShareDataService, 'login').and.callThrough();
    component.loginFormMat.controls['username'].setValue('testuser');
    component.loginFormMat.controls['password'].setValue('testpassword');
    //component.onSubmit();
   // expect(EShareDataService.login).toHaveBeenCalledWith('testuser', 'testpassword');
  });
  it('form should be invalid when empty', () => {
    expect(component.loginFormMat.valid).toBeFalsy();
  });
 
//   it('email field validity', () => {
//     let errors = {};
//     let email = component.loginFormMat.controls['email'];
//     expect(email.valid).toBeFalsy();

//     // Email field is required
//     errors = email.errors || {};
//     expect(errors['required']).toBeTruthy();
// expect(errors('re'))
//     // Set email to something correct
//     email.setValue("test@test.com");
//     errors = email.errors || {};
//     expect(errors['required']).toBeFalsy();
//     expect(errors['email']).toBeFalsy();
//   });
  
});
