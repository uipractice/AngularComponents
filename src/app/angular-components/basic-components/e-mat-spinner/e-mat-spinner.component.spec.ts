import { Overlay } from '@angular/cdk/overlay';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { EMatSpinnerComponent } from './e-mat-spinner.component';


describe('EMatSpinnerComponent', () => {
  let component: EMatSpinnerComponent;
  let fixture: ComponentFixture<EMatSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatSpinnerComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default spinner', () => {
    const fixture = TestBed.createComponent(EMatSpinnerComponent);
    fixture.detectChanges();
  
    const spinner = fixture.debugElement.query(By.css('mat-spinner'));
    expect(spinner).toBeTruthy();
  });
  
});