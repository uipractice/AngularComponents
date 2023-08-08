import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

import { CarouselGalleryComponent } from './carousel-gallery.component';

describe('CarouselGalleryComponent', () => {
  let component: CarouselGalleryComponent;
  let fixture: ComponentFixture<CarouselGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselGalleryComponent ],
      providers: [EShareDataService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
