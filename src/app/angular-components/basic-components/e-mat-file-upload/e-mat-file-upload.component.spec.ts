import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { EMatFileUploadComponent } from './e-mat-file-upload.component';

describe('EMatFileUploadComponent', () => {
  let component: EMatFileUploadComponent;
  let fixture: ComponentFixture<EMatFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatFileUploadComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display file input field', () => {
    const fileInput = fixture.debugElement.query(By.css('input[type="file"]'));
    expect(fileInput).toBeTruthy();
  });
  it('should call onFileChange method when file input value is changed', () => {
    spyOn(component, 'onFileUpload');
    const fileInput = fixture.debugElement.query(By.css('input[type="file"]')).nativeElement;
    fileInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.onFileUpload).toHaveBeenCalled();
  });
});
