import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatFilterTableComponent } from './e-mat-filter-table.component';

describe('EMatFilterTableComponent', () => {
  let component: EMatFilterTableComponent;
  let fixture: ComponentFixture<EMatFilterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatFilterTableComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatFilterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
