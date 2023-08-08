import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from "@angular/router/testing";
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { ELayoutComponent } from './e-layout.component';

describe('ComponentLayoutComponent', () => {
  let component: ELayoutComponent;
  let fixture: ComponentFixture<ELayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELayoutComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create function', ()=>{
    expect(component.copyToClipboard).toBeTruthy();
  })
 
});
