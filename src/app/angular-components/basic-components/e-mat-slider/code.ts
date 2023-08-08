export const Code = {
    html: {
      content: ` 
    <mat-slider></mat-slider>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-e-mat-slider',
      templateUrl: './e-mat-slider.component.html',
      styleUrls: ['./e-mat-slider.component.scss']
    })
    export class EMatSliderComponent implements OnInit {
    
      constructor() { }
    
      ngOnInit() {
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
    },
    bootstrapHtml:{
      content:`
      <!-- There is no HTML code for Bootstrap -->
      `,
      language: 'HTML'
    },
    bootstrapTS:{
      content:`
      /* There is no TS code for Bootstrap */
      `,
      language: 'TS'
    },
    bootstrapCSS:{
      content:`
      /* There is no CSS code for Bootstrap*/
      `,
      language: 'CSS'
    }
  }