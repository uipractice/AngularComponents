import { Overlay } from '@angular/cdk/overlay';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { EMatForgotComponent } from './e-mat-forgot.component';

describe('EMatForgotComponent', () => {
  let component: EMatForgotComponent;
  let fixture: ComponentFixture<EMatForgotComponent>;
  let passwordEl: DebugElement;
  let confirmPasswordEl: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatForgotComponent ],
      imports: [ReactiveFormsModule],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the login service when the form is submitted', () => {
   // spyOn(EShareDataService, 'login').and.callThrough();
    component.forgotForm.controls['newpassword'].setValue('testuser');
    component.forgotForm.controls['confrmpassword'].setValue('testpassword');
    //component.forgotFormVal();
   // expect(component.login).toHaveBeenCalledWith('testuser', 'testpassword');
  });
  const control = new FormControl({password: 'whatever'});
  it('forgotForm should be invalid when empty', () => {
    expect(component.forgotForm.valid).toBeFalsy();
  });

  it('forgotFormBootstrap should be invalid when empty', () => {
    expect(component.forgotFormBootstrap.valid).toBeFalsy();
  });
  it('should return null if the passwords match', () => {
    component.forgotForm.controls.newpassword.setValue('password123');
    component.forgotForm.controls.confrmpassword.setValue('password123');
    expect(component.forgotForm.valid).not.toBeTruthy();
  });
  it('should return an error if the passwords do not match', () => {
    component.forgotForm.controls.newpassword.setValue('password123');
    component.forgotForm.controls.confrmpassword.setValue('password456');
    expect(component.forgotForm.valid).toBeFalsy();
  });
  
});