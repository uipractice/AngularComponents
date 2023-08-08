import { Overlay } from '@angular/cdk/overlay';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { DualsliderComponent } from './dualslider.component';

describe('DualsliderComponent', () => {
  let component: DualsliderComponent;
  let fixture: ComponentFixture<DualsliderComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualsliderComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualsliderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set default values for the value and highValue properties', () => {
    expect(component.value).toBe(1000);
    expect(component.highValue).toBe(500);
  });
  it('should set default options for the slider', () => {
    expect(component.options.floor).toBe(100);
    expect(component.options.ceil).toBe(5000);
  });
  it('should render the slider', () => {
    const fixture = TestBed.createComponent(DualsliderComponent);
    const sliderElement = fixture.nativeElement;
    expect(sliderElement.querySelector('ngx-slider')).toBeTruthy();
  });
  it('should display the range', () => {
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Range: 1000-500 ');
  });
  it('should update value and high value when slider is used', () => {
    const sliderElement = fixture.debugElement.query(By.css('p')).nativeElement;
    const expectedValue = 1000;
    const expectedHighValue = 500;

    sliderElement.value = expectedValue;
    sliderElement.dispatchEvent(new Event('input'));

    expect(component.value).toEqual(expectedValue);

    sliderElement.highValue = expectedHighValue;
    sliderElement.dispatchEvent(new Event('input'));

    expect(component.highValue).toEqual(expectedHighValue);
  });
});
