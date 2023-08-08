import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { MatDialog } from '@angular/material/dialog';

import { EMatCustomDropdownComponent } from './e-mat-custom-dropdown.component';

describe('EMatCustomDropdownComponent', () => {
  let component: EMatCustomDropdownComponent;
  let fixture: ComponentFixture<EMatCustomDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMatCustomDropdownComponent ],
      providers: [EShareDataService, MatSnackBar, MatDialog, Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatCustomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
