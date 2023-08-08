import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { specialPipe } from 'src/app/e-shared/specialPipe.pipe';

import { EDashboardComponent } from './e-dashboard.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Router } from '@angular/router';
class MockShareDataService extends EShareDataService {
  getcomponentName() {
      return 'Mocked';
  }
}
describe('EDashboardComponent', () => {
  let component: EDashboardComponent;
  let fixture: ComponentFixture<EDashboardComponent>;
  let RouterMock = {
    navigate: jasmine.createSpy('navigate')
  };
  let testBedService: EShareDataService;
  let componentService: EShareDataService;
  beforeEach(waitForAsync(() => {   
    TestBed.configureTestingModule({
      declarations: [ EDashboardComponent, specialPipe ],
      imports: [BrowserAnimationsModule, RouterTestingModule,HttpClientTestingModule],
      providers: [ MatSnackBar, Overlay,
        { provide: Router, useValue: RouterMock },
        { provide: EShareDataService, useClass: MockShareDataService },
      ]
    })
    .compileComponents();
  }));
 
  
  beforeEach(() => {
   
    fixture = TestBed.createComponent(EDashboardComponent);
    component = fixture.componentInstance;
    testBedService = TestBed.inject(EShareDataService);
    componentService = fixture.debugElement.injector.get(EShareDataService);
    fixture.detectChanges();
  });
 
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

it('should navigate for icons()', () => {

  spyOn(component, 'openComponent').and.callThrough();
const urlObj = {icon :"icons",id:"icons",link:"icons",name:"icons"};
  component.openComponent(urlObj);
  expect(RouterMock.navigate).toHaveBeenCalledWith([urlObj.link]);

});
it('Service injected via inject(...) and TestBed.inject(...) should be the same instance',
        inject([EShareDataService], (injectService: EShareDataService) => {
            expect(injectService).toBe(testBedService);
        })
    );
})