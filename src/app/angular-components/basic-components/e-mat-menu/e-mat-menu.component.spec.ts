import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatMenuComponent } from './e-mat-menu.component';

describe('EMatMenuComponent', () => {
  let component: EMatMenuComponent;
  let fixture: ComponentFixture<EMatMenuComponent>;
  let eShareDataServiceStub: Partial<EShareDataService>;

  beforeEach(async(() => {
    eShareDataServiceStub = {
      bootstrapCode: false
    };
    TestBed.configureTestingModule({
      declarations: [ EMatMenuComponent ],
      imports: [MatMenuModule],
      providers: [ MatSnackBar, Overlay, EShareDataService]
       // { provide: EShareDataService, useValue: eShareDataServiceStub }] // EShareDataService
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show menu button if bootstrapCode is false', () => {
    const menuButton = fixture.debugElement.query(By.css('button[mat-raised-button]'));
    expect(menuButton).toBeTruthy();
  });
  it('should open menu when menu button is clicked', () => {
    const menuButton = fixture.debugElement.query(By.css('button[mat-raised-button]'));
    menuButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const menu = fixture.debugElement.query(By.css('mat-menu'));
    expect(menu).toBeTruthy();
  });
});
