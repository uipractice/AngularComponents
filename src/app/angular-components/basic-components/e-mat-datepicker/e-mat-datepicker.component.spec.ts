import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatDatePickerComponent } from './e-mat-datepicker.component';

describe('EMatDatePickerComponent', () => {
  let component: EMatDatePickerComponent;
  let fixture: ComponentFixture<EMatDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatDatePickerComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
