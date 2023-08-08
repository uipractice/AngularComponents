import { AgmMap, AgmMarker } from '@agm/core';
import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatMapComponent } from './e-mat-map.component';

describe('EMatMapComponent', () => {
  let component: EMatMapComponent;
  let fixture: ComponentFixture<EMatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatMapComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the center of the map to the provided latitude and longitude values', () => {
    component.lat = 17.434832;
    component.lng = 78.384815;
    fixture.detectChanges();
    expect(component.lat).toBe(17.434832);
    expect(component.lng).toBe(78.384815);
  });
  it('should display the correct title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h5');
    expect(title.textContent).toBe(component.title);
  });
  
  
});
