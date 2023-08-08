import { Overlay } from '@angular/cdk/overlay';
import { TestBed, async, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { EMatNotificationComponent } from './e-mat-notification.component';

describe('EMatNotificationComponent', () => {
    let component: EMatNotificationComponent;
    let fixture: ComponentFixture<EMatNotificationComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatBadgeModule, MatButtonModule, MatIconModule,],
      providers: [EShareDataService, MatSnackBar, Overlay],
      declarations: [EMatNotificationComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EMatNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render badges on span, button and icon elements', () => {
    const badgeElements = fixture.nativeElement.querySelectorAll('[matBadge]');
    expect(badgeElements.length).toBe(3);
    expect(badgeElements[0].textContent).toContain('Text with a badge4');
    expect(badgeElements[1].textContent).toContain('Action 8');
    expect(badgeElements[2].textContent).toContain('home15');
  });
  it('should display a text description for screen-readers', () => {
    const descriptionEl = fixture.debugElement.query(By.css('.cdk-visually-hidden'));
    console.log(fixture);
    expect(descriptionEl.nativeElement.textContent).toBe(' Example with a home icon with overlaid badge showing the number 15 ');
  });
});