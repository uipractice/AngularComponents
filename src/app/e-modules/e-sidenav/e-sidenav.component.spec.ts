
import { Overlay } from '@angular/cdk/overlay';
import { fakeAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { specialPipe } from 'src/app/e-shared/specialPipe.pipe';
import { ESideNavComponent, FileDatabase } from './e-sidenav.component';
import {  MediaMatcher } from '@angular/cdk/layout';
import { MaterialModule } from 'src/app/e-l10n/shared/material.module';

describe('ESideNavComponent', () => {
  let component: ESideNavComponent;
  let fixture: ComponentFixture<ESideNavComponent>;
  let inputEl: HTMLElement;
  let testBedService: EShareDataService;
  let route: ActivatedRoute; 
  let fileDatabase: FileDatabase;
  let mediaMatcher: MediaMatcher;
 
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ESideNavComponent, specialPipe, MatAutocomplete ],
      imports: [RouterTestingModule, MatMenuModule, MatSidenavModule, BrowserAnimationsModule, MaterialModule],
      providers: [EShareDataService, MatSnackBar, Overlay,FileDatabase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESideNavComponent);
    inputEl = fixture.nativeElement.querySelector('button');
    testBedService = TestBed.inject(EShareDataService);
    route = TestBed.inject(ActivatedRoute);
    fileDatabase = TestBed.inject(FileDatabase);
    mediaMatcher = TestBed.inject(MediaMatcher);
    component = fixture.componentInstance;
    fixture.detectChanges();     
    expect(component).toBeDefined();
    
  }));
 
  it('should compile', () => {
    expect(component).toBeTruthy();
  });
  it('should create opencomponent', () => {
    expect(component.onSearch).toBeTruthy();
  });
  it('should create opencomponent', () => {
    expect(component.onSearchChange).toBeTruthy();
  });  
  it('should create opencomponent', () => {     
    expect(component.openMenuFunction).toBeTruthy();
  });
  
  it('should trigger onResize method when window is resized', () => {
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
 });
 it('Service injected via inject',
        inject([EShareDataService], (injectService: EShareDataService) => {
            expect(injectService).toBe(testBedService);
        })
    );
    // it('detects changes', () => {
    //   // This is a unique instance here, brand new
    //   const changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef); 
     
    //   // So, I am spying directly on the prototype.
    //   const detectChangesSpy = spyOn(changeDetectorRef.constructor.prototype, 'detectChanges');

    //  // component.someMethod(); // Which internally calls the detectChanges.

    //   expect(detectChangesSpy).toHaveBeenCalled();
    // });
    it('should use change detection in the constructor', () => {
      spyOn(component, 'ngOnInit');
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
    it('should be created for filedatabase', () => {
      expect(fileDatabase).toBeTruthy();
    });
    it('should have a mediaMatcher', () => {
      expect(mediaMatcher).toBe(mediaMatcher);
    });
   
});


