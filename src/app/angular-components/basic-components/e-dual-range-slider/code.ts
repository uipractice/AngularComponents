export const Code = {
html: {
    content: ` 
<div class="profile_data">
  <div class="form-group range_slider form_range_slider">
    <p>Select your range</p>
    <ion-range-slider #sliderElement type="double" min="0" max="1000" prefix="{{currencySymbol}} " [from]="from" [to]="to" from_shadow="true"
      to_shadow="true" decorate_both="false" (onFinish)="myOnFinish($event)">
    </ion-range-slider>
  </div>
</div>
<div fxLayout="row wrap" fxLayoutAlign="start start">
  <div fxFlex="100"   fxLayoutAlign="start start">
     <p fxFlex="100">your minimum value is : {{from}}</p>
     <p fxFlex="100">your maximum value is : {{to}}</p>
  </div>
</div>
`,
    language: 'html'
    },
ts: {
    content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-e-dual-range-slider',
        templateUrl: './e-dual-range-slider.component.html',
        styleUrls: ['./e-dual-range-slider.component.scss']
    })

    export class EDualRangeSliderComponent implements OnInit {
        currencySymbol:any = "$";
        from:any;
        to:any;

        constructor() { }        
            myOnFinish(event) {
                this.from = event.from;
                this.to = event.to;
            }
    }
        `,
    language: 'javascript'
    },
css: {
    content: `
    /** No CSS for this example */
        `,
    language: 'css'
    }
}