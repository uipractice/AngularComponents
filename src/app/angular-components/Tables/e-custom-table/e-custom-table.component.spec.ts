import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { AlertMessageService } from 'src/app/e-shared/alert-message.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ECustomTableComponent } from './e-custom-table.component';
import { ESharedModule } from 'src/app/e-shared';

describe('ECustomTableComponent', () => {
  let component: ECustomTableComponent;
  let fixture: ComponentFixture<ECustomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECustomTableComponent ],
      imports: [

        ESharedModule

      ],
      providers: [EShareDataService, MatSnackBar, Overlay, MatDialog, MatDialogConfig, AlertMessageService], 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
