import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatPaginationComponent } from './e-mat-pagination.component';

describe('EMatPaginationComponent', () => {
  let component: EMatPaginationComponent;
  let fixture: ComponentFixture<EMatPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatPaginationComponent ],
      imports:[MatPaginatorModule,BrowserAnimationsModule ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
