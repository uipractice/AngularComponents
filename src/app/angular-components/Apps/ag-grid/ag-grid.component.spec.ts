import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridComponent } from './ag-grid.component';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridComponent ],
      providers:[EShareDataService,MatSnackBar,Overlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
