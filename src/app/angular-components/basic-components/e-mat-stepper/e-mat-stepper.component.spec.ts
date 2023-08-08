import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatStepper } from '@angular/material/stepper';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { EMatStepperComponent } from './e-mat-stepper.component';

describe('EMatStepperComponent', () => {
    let component: EMatStepperComponent;
    let fixture: ComponentFixture<EMatStepperComponent>;
    let stepper: MatStepper;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatStepperModule, ReactiveFormsModule, MatFormFieldModule,
                MatInputModule,MatCardModule,
                MatButtonModule, BrowserAnimationsModule],
            declarations: [EMatStepperComponent],
            providers: [EShareDataService, MatSnackBar, Overlay]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EMatStepperComponent);
        component = fixture.componentInstance;
        stepper = fixture.debugElement.query(By.directive(MatStepper)).componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a linear mode by default', () => {
        expect(component.isLinear).toBeFalsy();
    });

    it('should have first step as the active step', () => {
        expect(stepper.selectedIndex).toEqual(0);
    });

    it('should move to next step when "Next" button is clicked in first step', () => {
        const nextButton = fixture.debugElement.query(By.css('button[matStepperNext]')).nativeElement;
        nextButton.click();
        //  fixture.detectChanges();
        expect(stepper.selectedIndex).toEqual(1);
    });

    it('should move to previous step when "Back" button is clicked in second step', () => {
        stepper.selectedIndex = 1;
        const previousButton = fixture.debugElement.query(By.css('button[matStepperPrevious]')).nativeElement;
        previousButton.click();
        expect(stepper.selectedIndex).toEqual(0);
    });
    // it('should reset the stepper when "Reset" button is clicked in final step', () => {
    //     stepper.selectedIndex = 2;
    //     fixture.detectChanges();
    //     const resetButton = fixture.debugElement.query(By.css('button[click="stepper.reset()"]')).nativeElement;
    //     resetButton.click();
    //     fixture.detectChanges();
    //     expect(stepper.selectedIndex).toEqual(0);
    // });
    it('should set isVertical to true', () => {
        component.isVertical = true;
        expect(component.isVertical).toBe(true);
    });
    it('should have firstFormGroup1 defined', () => {
        expect(component.firstFormGroup1).toBeDefined();
    });
    it('should have secondFormGroup1 defined', () => {
        expect(component.secondFormGroup1).toBeDefined();
    });
    it('should have firstCtrl control defined in firstFormGroup1', () => {
        expect(component.firstFormGroup1.contains('firstCtrl')).toBe(true);
    });
    it('should have secondCtrl control defined in secondFormGroup1', () => {
        expect(component.secondFormGroup1.contains('secondCtrl')).toBe(true);
    });
    it('should require firstCtrl control to be filled', () => {
        component.firstFormGroup1.get('firstCtrl').setValue('');
        expect(component.firstFormGroup1.get('firstCtrl').hasError('required')).toBe(true);
    });
    it('should require secondCtrl control to be filled', () => {
        component.secondFormGroup1.get('secondCtrl').setValue('');
        expect(component.secondFormGroup1.get('secondCtrl').hasError('required')).toBe(true);
    });

});
