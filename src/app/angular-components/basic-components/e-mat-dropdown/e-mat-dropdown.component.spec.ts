import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatDropdownComponent } from './e-mat-dropdown.component';

describe('EMatDropdownComponent', () => {
  let component: EMatDropdownComponent;
  let fixture: ComponentFixture<EMatDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatDropdownComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render a dropdown with options', () => {
    component.foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
    //  {value: 'tacos-2', viewValue: 'Tacos'}
    ];
    fixture.detectChanges();

    const dropdownElement = fixture.nativeElement.querySelector('mat-select');
    expect(dropdownElement).toBeTruthy();

    const options = dropdownElement.querySelectorAll('mat-option');
    expect(options.length).toBe(2);
    expect(options[0].textContent).toContain('Steak');
    expect(options[1].textContent).toContain('Pizza');
  });
});
