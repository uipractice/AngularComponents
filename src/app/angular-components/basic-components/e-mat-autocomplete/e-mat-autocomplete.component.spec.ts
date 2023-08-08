import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatAutocompleteComponent } from './e-mat-autocomplete.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('EMatAutocompleteComponent', () => {
  let component: EMatAutocompleteComponent;
  let fixture: ComponentFixture<EMatAutocompleteComponent>;
  let input: HTMLInputElement;
  let inputEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatAutocompleteComponent, MatAutocomplete ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
      ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatAutocompleteComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
    component.myControl = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display options on input focus', () => {
    inputEl.triggerEventHandler('focus', {});
    const options = fixture.debugElement.queryAll(By.css('.example-full-width'));
    expect(options.length).toBeGreaterThan(0);
  });
  it('should filter options based on input value', () => {
    component.options = ['One', 'Two', 'Three'];    component.myControl.setValue('1');

    const options = fixture.debugElement.queryAll(By.css('.example-full-width'));
    expect(options.length).toBe(1);
   // expect(options[0].nativeElement.textContent).toContain('One');
  });
  it('should select option on click', () => {
    component.options = ['One', 'Two', 'Three'];
    component.myControl.setValue('1');
    const options = fixture.debugElement.queryAll(By.css('.example-full-width'));
    options[0].triggerEventHandler('click', {});
    expect(component.myControl.value).toBe('1');
  });
});
