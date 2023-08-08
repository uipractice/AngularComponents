import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { Code } from './code';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[]=[];
  galleryImages: NgxGalleryImage[]=[];

  code: any;
  constructor(public eShareDataService: EShareDataService) { }

  ngOnInit(): void {

    this.code = Code;
    this.eShareDataService.pushCode(this.code);

      this.galleryOptions = [
          {
              width: '100%',
              height: '500px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Rotate,
              imageArrowsAutoHide: true,
              thumbnailsArrowsAutoHide: true,
              imageAutoPlay: true, imageAutoPlayPauseOnHover: true,
              previewAutoPlay: true, previewAutoPlayPauseOnHover: true,
              previewZoom: true, previewRotate: true, previewDownload: true,
              // previewBullets: true,
              thumbnailsRows: 1,
              thumbnailMargin: 7,
              thumbnailsMargin: 7,
              thumbnailsOrder: 2,
              thumbnailsPercent: 25,
              previewKeyboardNavigation: true
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 30,
              thumbnailsPercent: 30,
              thumbnailsMargin: 10,
              thumbnailMargin: 10
          },
         // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

  this.galleryImages = [
      {
      small: 'assets/756150_c033_2.jpg',
      medium: 'assets/756150_c033_2.jpg',
      big: 'assets/756150_c033_2.jpg'
      },
      {
      small: 'assets/carosel_img2.png',
      medium: 'assets/carosel_img2.png',
      big: 'assets/carosel_img2.png'
      },
      {
      small: 'assets/uivsux1.jpeg',
      medium: 'assets/uivsux1.jpeg',
      big: 'assets/uivsux1.jpeg'
      },
      {
      small: 'assets/b2ap3_large_Blog-banner.png',
      medium: 'assets/b2ap3_large_Blog-banner.png',
      big: 'assets/b2ap3_large_Blog-banner.png'
      },
      {
      small: 'assets/uivsux.jpg',
      medium: 'assets/uivsux.jpg',
      big: 'assets/uivsux.jpg'
      },
      {
      small: 'assets/angular-10-features.png',
      medium: 'assets/angular-10-features.png',
      big: 'assets/angular-10-features.png'
      }
];
}
}
