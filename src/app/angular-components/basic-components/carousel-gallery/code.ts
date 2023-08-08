export const Code = {
    html: {
content: `<ngx-carousel  
[inputs]="carouselBanner" 
(carouselLoad)="carouselBannerLoad($event)">
<ngx-item NgxCarouselItem class="bannerStyle" *ngFor="let Banner of carouselBannerItems">
<img width="100%" height="500px" alt="thumbnail" [src]="Banner.image" >
</ngx-item>
<button NgxCarouselPrev class='leftRs'>&lt;</button>
<button NgxCarouselNext class='rightRs'>&gt;</button>
</ngx-carousel>`,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Code } from './code';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

@Component({
selector: 'app-carousel-gallery',
templateUrl: './carousel-gallery.component.html',
styleUrls: ['./carousel-gallery.component.scss']
})

export class CarouselGalleryComponent implements OnInit  {
//point?:boolean=true;
public carouselBannerItems: any;
public carouselBanner: NgxCarousel;
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
interval: 4000,
load: 1,
loop: true,
point:{visible:true,
pointStyles:\`
.ngxcarouselPoint {
list-style-type: none;
text-align: center;
padding: 12px;
margin: 0;
white-space: nowrap;
overflow: auto;
position: absolute;
width: 100%;
bottom: 20px;
left: 0;
box-sizing: border-box;
}
.ngxcarouselPoint li {
display: inline-block;
border-radius: 999px;
background: rgba(255, 255, 255, 0.55);
padding: 5px;
margin: 0 3px;
transition: .4s ease all;
}
.ngxcarouselPoint li.active {
background: white;
width: 16px;
}

}\`},
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
`,
    language: 'javascript'
    },
    css: {
    content: `
    .leftRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 45px;
        left: 0;
        font-size: 25px;
        background-color:#ff9b21;
        color:white;
        ;
        
    }
    
    .rightRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 45px;
        right: 0;
        font-size: 25px;
        background-color:#ff9b21;
        color:white;
       
    }
    `,
    language: 'css'
    },
    bootstrapHtml: {
    content: `coming-soon`,
    language: 'HTML'
    },
    bootstrapTS: {
    content: `coming-soon
    `,
    language: 'TS'
    },
    bootstrapCSS: {
    content: `coming-soon
    `,
    language: 'CSS'
    }
    }
    