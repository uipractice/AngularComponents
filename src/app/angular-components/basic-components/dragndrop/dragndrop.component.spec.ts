import { DragDropModule } from '@angular/cdk/drag-drop';
import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { DragndropComponent } from './dragndrop.component';

describe('DragndropComponent', () => {
  let component: DragndropComponent;
  let fixture: ComponentFixture<DragndropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragndropComponent ],
      imports: [DragDropModule,MatCardModule],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragndropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
