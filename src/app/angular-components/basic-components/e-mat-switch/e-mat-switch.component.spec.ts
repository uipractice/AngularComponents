import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { EMatSwitchComponent } from './e-mat-switch.component';

describe('MatSlideToggle', () => {
  let fixture: ComponentFixture<EMatSwitchComponent>;
  let component: EMatSwitchComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatSlideToggleModule ],
      declarations: [ EMatSwitchComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    });

    fixture = TestBed.createComponent(EMatSwitchComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
})