import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportexcelComponent } from './exportexcel.component';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

describe('ExportexcelComponent', () => {
  let component: ExportexcelComponent;
  let fixture: ComponentFixture<ExportexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportexcelComponent ],
      providers:[EShareDataService,MatSnackBar,Overlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
