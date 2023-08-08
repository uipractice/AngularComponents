import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EMatRegisterComponent } from './e-mat-register.component';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('EMatRegisterComponent', () => {
  let component: EMatRegisterComponent;
  let fixture: ComponentFixture<EMatRegisterComponent>;
  let inputEl: DebugElement;
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatRegisterComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ],
      providers: [EShareDataService,MatSnackBar,Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatRegisterComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('email field should be required', () => {
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();

    let errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password field should be required', () => {
    let password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy();

    let errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('first name field should be required', () => {
    let fname = component.registerForm.controls['fname'];
    expect(fname.valid).toBeFalsy();

    let errors = fname.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('last name field should be required', () => {
    let lname = component.registerForm.controls['lname'];
    expect(lname.valid).toBeFalsy();

    let errors = lname.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('phone field should be required', () => {
    let phone = component.registerForm.controls['phone'];
    expect(phone.valid).toBeFalsy();

    let errors = phone.errors || {};
    expect(errors['required']).toBeTruthy();
  });
 
  // it('should have a phone number input field', () => {
  //   expect(inputEl).toBeTruthy();
  // });

});
