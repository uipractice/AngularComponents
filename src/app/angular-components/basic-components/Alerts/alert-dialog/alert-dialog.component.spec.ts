import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AlertDialogComponent } from './alert-dialog.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';
describe('AlertDialogComponent', () => {
  let component: AlertDialogComponent;
  let rootLoader: HarnessLoader;
  let fixture: ComponentFixture<AlertDialogComponent>;
  let overlayContainer: OverlayContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDialogComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay
      ,{ provide: MAT_DIALOG_DATA, useValue: {} },  { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    overlayContainer = TestBed.inject(OverlayContainer);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('dialog should be closed after onYesClick()', () => {
  //   let spy = jasmine.createSpy('close').and.callThrough();
  //   component.close();
  //   expect(spy).toHaveBeenCalled(); 
  // });
  afterEach(async () => {
    const dialogs = await rootLoader.getAllHarnesses(MatDialogHarness);

    await Promise.all(dialogs.map(async (d: MatDialogHarness) => await d.close()));
    overlayContainer.ngOnDestroy();
  });
  it('should close dialog on "Close" click', async () => {
    const yesButton = await rootLoader.getHarness(
      MatButtonHarness.with({
        text: 'Close'
      })
    );

    await yesButton.click();

    const dialogs = await rootLoader.getAllHarnesses(MatDialogHarness);

    expect(dialogs.length).toBe(0);
  });
  
});

