export const Code = {
    html: {
      content: ` 
      <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side">
        <p>Auto-resizing sidenav</p>
        <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
        <button (click)="showFiller = !showFiller" mat-raised-button>
          Toggle extra text
        </button>
      </mat-drawer>
    
      <div class="example-sidenav-content">
        <button type="button" mat-raised-button (click)="drawer.toggle()" style="background: #f2f3f8">
          Toggle sidenav
        </button>
      </div>
    
    </mat-drawer-container>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';
    @Component({
      selector: 'app-e-mat-navigation',
      templateUrl: './e-mat-navigation.component.html',
      styleUrls: ['./e-mat-navigation.component.scss']
    })
    export class EMatNavigationComponent implements OnInit {
      showFiller = false;
      constructor() { }
      ngOnInit() {
      }
    }
         
        `,
    language: 'javascript'
  },
    css: {
      content: `
    .example-container {
      width: 500px;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
    
    .example-sidenav-content {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    
    .example-sidenav {
      padding: 20px;
    }
      
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