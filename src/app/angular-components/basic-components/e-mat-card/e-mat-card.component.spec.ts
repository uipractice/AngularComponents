import { Overlay } from '@angular/cdk/overlay';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatCardComponent } from './e-mat-card.component';

describe('EMatCardComponent', () => {
  let component: EMatCardComponent;
  let fixture: ComponentFixture<EMatCardComponent>;
  let eShareDataService: EShareDataService;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMatCardComponent ],
      imports: [MatCardModule, MatButtonModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatCardComponent);
    component = fixture.componentInstance;
    eShareDataService = TestBed.inject(EShareDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
  it('should render mat-card if bootstrapCode is false', () => {
    const eShareDataService = TestBed.inject(EShareDataService);
    eShareDataService.bootstrapCode = false;
    fixture.detectChanges();

    const cardElement = fixture.nativeElement.querySelector('mat-card');
    expect(cardElement).toBeTruthy();
  });  
});
