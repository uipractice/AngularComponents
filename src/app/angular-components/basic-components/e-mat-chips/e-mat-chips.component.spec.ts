import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatChipsComponent } from './e-mat-chips.component';

describe('EMatChipsComponent', () => {
  let component: EMatChipsComponent;
  let fixture: ComponentFixture<EMatChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMatChipsComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
