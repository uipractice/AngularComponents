import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let rootLoader: HarnessLoader;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let overlayContainer: OverlayContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay,
        { provide: MAT_DIALOG_DATA, useValue: {} },  { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    overlayContainer = TestBed.inject(OverlayContainer);
  });
  afterEach(async () => {
    const dialogs = await rootLoader.getAllHarnesses(MatDialogHarness);

    await Promise.all(dialogs.map(async (d: MatDialogHarness) => await d.close()));
    overlayContainer.ngOnDestroy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should close dialog on "Cancel" click', async () => {
    const yesButton = await rootLoader.getHarness(
      MatButtonHarness.with({
        text: 'Cancel'
      })
    );

    await yesButton.click();

    const dialogs = await rootLoader.getAllHarnesses(MatDialogHarness);

    expect(dialogs.length).toBe(0);
  });
  it('should close dialog on "Ok" click', async () => {
    const yesButton = await rootLoader.getHarness(
      MatButtonHarness.with({
        text: 'OK'
      })
    );

    await yesButton.click();

    const dialogs = await rootLoader.getAllHarnesses(MatDialogHarness);

    expect(dialogs.length).toBe(0);
  });
});
