import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatFormValidComponent } from './e-mat-formvalid.component';

describe('EMatFormValidComponent', () => {
  let component: EMatFormValidComponent;
  let fixture: ComponentFixture<EMatFormValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatFormValidComponent ],
      imports: [FormsModule],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatFormValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
