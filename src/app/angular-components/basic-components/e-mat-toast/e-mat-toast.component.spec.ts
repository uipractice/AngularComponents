import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EMatToastComponent } from './e-mat-toast.component';
import { Overlay } from '@angular/cdk/overlay';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
describe('EMatToastComponent', () => {
    let component: EMatToastComponent;
    let fixture: ComponentFixture<EMatToastComponent>;
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;
    let snackBar: MatSnackBar;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EMatToastComponent],
            imports: [BrowserAnimationsModule, MatSnackBarModule],
            providers: [EShareDataService, MatSnackBar, Overlay]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EMatToastComponent);
        snackBar = TestBed.inject(MatSnackBar);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.css('input[placeholder="Message"]'));
        htmlElement = debugElement.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should display the correct placeholder text', () => {
        //  component.text = 'Test Placeholder';
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('input[placeholder]').placeholder).toContain('Message');
    });
    it('should have correct placeholder in action input', () => {
        const actionInput = fixture.debugElement.query(By.css('input[placeholder="Action"]')).nativeElement;
        expect(actionInput.placeholder).toEqual('Action');
    });
    it('should have correct value in message input', () => {
        const compiled = fixture.debugElement.nativeElement;
        const messageInput = compiled.querySelector('input[placeholder="Message"]');
        expect(messageInput.value).toEqual('Disco party!');
    });
    it('should have correct value in action input', () => {
        const compiled = fixture.debugElement.nativeElement;
        const messageInput = compiled.querySelector('input[placeholder="Action"]');
        expect(messageInput.value).toEqual('Dance');
    });
    it('should call openSnackBar function when button is clicked', () => {
        spyOn(component, 'openSnackBar');
        const button = fixture.debugElement.query(By.css('button')).nativeElement;
        button.click();
        expect(component.openSnackBar).toHaveBeenCalledWith('Disco party!', 'Dance');
    });
    it('should open the snack bar with a message', () => {
        let snackBarSpy = spyOn(component.snackBar, 'open').and.callThrough();
        component.openSnackBar("message", "action");
        expect(snackBarSpy).toHaveBeenCalledWith("message", "action", { duration: 2000 });
    });
});
