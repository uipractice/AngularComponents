import { Component, OnInit } from '@angular/core';
import { Code } from './code';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
selector: 'app-carousel-gallery',
templateUrl: './carousel-gallery.component.html',
styleUrls: ['./carousel-gallery.component.scss']
})



export class CarouselGalleryComponent implements OnInit  {
//point?:boolean=true;
public carouselBannerItems: any;
public carouselBanner: NguCarouselConfig|null=null;
code: any;
constructor(public eShareDataService: EShareDataService) { }

ngOnInit() {

this.code = Code;
this.eShareDataService.pushCode(this.code);

this.carouselBannerItems = [
{
title: '1',
color: 'red',
image:'https://cdn.mindmajix.com/blog/images/angular8-tutorial-0107.png',
},
{
title: '2',
color: 'blue',
image:'http://www.hdwallpaperspulse.com/wp-content/uploads/2017/02/07/beach-hd-background.jpg'
},
{
title: '3',
color: 'red',
image:'http://hdwarena.com/wp-content/uploads/2018/07/Free-HD-Wallpaper.jpg'
},{
title: '4',
color: 'red',
image:'https://www.pixelstalk.net/wp-content/uploads/2016/06/Technology-Dekstop-Wallpapers.jpg'
},
{
title: '5',
color: 'red',
image:'https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
}
];

this.carouselBanner = {
grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
slide: 1,
speed: 400,
load: 1,
loop: true,
point:{visible:true,
},
custom: 'banner',
touch: true,

}

}

public carouselBannerLoad(evt: any) {

const len = this.carouselBannerItems.length
if (len <= 3) {
for (let i = len; i < len; i++) {
this.carouselBannerItems.push(i);
}
}


}

}


