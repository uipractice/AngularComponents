import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatSliderComponent } from './e-mat-slider.component';

describe('EMatSliderComponent', () => {
  let component: EMatSliderComponent;
  let fixture: ComponentFixture<EMatSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatSliderComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the minimum value correctly', () => {
    expect(component.min).toEqual(0);
  });
  it('should set the maximum value correctly', () => {
    expect(component.max).toEqual(1000);
  });
  it('should set the step value correctly', () => {
    expect(component.step).toEqual(10);
  });
  it('should set the ngModel value correctly', () => {
    expect(component.value).toEqual(100);
  });
  it('should return 0 if showTicks is false', () => {
    component.showTicks = false;
    expect(component.tickInterval).toEqual(0);
    });
    it('should return auto if autoTicks is true and showTicks is true', () => {
      component.showTicks = true;
      component.autoTicks = true;
      expect(component.tickInterval).toEqual('auto');
      });
      it('should return _tickInterval if autoTicks is false and showTicks is true', () => {
        component.showTicks = true;
        component.autoTicks = false;
        component.tickInterval = 5;
        expect(component.tickInterval).toEqual(5);
        });
});
