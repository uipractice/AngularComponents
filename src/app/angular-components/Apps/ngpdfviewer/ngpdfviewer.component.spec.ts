import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpdfviewerComponent } from './ngpdfviewer.component';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

describe('NgpdfviewerComponent', () => {
  let component: NgpdfviewerComponent;
  let fixture: ComponentFixture<NgpdfviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgpdfviewerComponent ],
      providers:[EShareDataService,MatSnackBar,Overlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgpdfviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
