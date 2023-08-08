import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { EMatProgressbarComponent } from './e-mat-progressbar.component';

describe('EMatProgressbarComponent', () => {
    let component: EMatProgressbarComponent;
    let fixture: ComponentFixture<EMatProgressbarComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule ],
      providers: [EShareDataService, MatSnackBar, Overlay],
      declarations: [EMatProgressbarComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EMatProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should have a value of 40', () => {
    const fixture = TestBed.createComponent(EMatProgressbarComponent);
    fixture.detectChanges();
    const progressBar = fixture.debugElement.query(By.css('mat-progress-bar')).componentInstance;
    expect(progressBar.value).toEqual(40);
  });

  it('should have a default mode of determinate', () => {
    const fixture = TestBed.createComponent(EMatProgressbarComponent);
    fixture.detectChanges();
    const progressBar = fixture.debugElement.query(By.css('mat-progress-bar')).componentInstance;
    expect(progressBar.mode).toEqual('determinate');
  });
  // it('should display a value of 40', () => {
  //   const fixture = TestBed.createComponent(EMatProgressbarComponent);
  //   fixture.detectChanges();
  //   const progressBar = fixture.debugElement.query(By.css('mat-progress-bar')).nativeElement;
  //   expect(progressBar.style.width).toEqual('40%');
  // });
});


