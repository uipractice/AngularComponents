import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { RouteGuardComponent } from './route-guard.component';

describe('RouteGuardComponent', () => {
  let component: RouteGuardComponent;
  let fixture: ComponentFixture<RouteGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteGuardComponent ],
      providers: [EShareDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
