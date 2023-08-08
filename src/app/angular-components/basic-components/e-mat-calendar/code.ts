export const Code = {
html: {
    content: `
  <mat-accordion>
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          Personal data
        </mat-panel-title>
        <mat-panel-description>
          Type your name and age
        </mat-panel-description>
      </mat-expansion-panel-header>
  
      <mat-form-field>
        <input matInput placeholder="First name">
      </mat-form-field>
  
      <mat-form-field>
        <input matInput placeholder="Age">
      </mat-form-field>
    </mat-expansion-panel>
    <mat-expansion-panel  [expanded]="true" (opened)="panelOpenState = true" (closed)="panelOpenState = false">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Self aware panel
        </mat-panel-title>
        
        <mat-panel-description>
          Currently I am {{panelOpenState ? 'open' : 'closed'}}
        </mat-panel-description>
        
      </mat-expansion-panel-header>
      <p>I'm visible because I am open</p>
    </mat-expansion-panel>
  </mat-accordion>
`,
    language: 'html'
    },
ts: {
    content: `
    import {Component} from '@angular/core';

    /**
      * @title Basic expansion panel
    */
    @Component({
      selector: 'expansion-overview-example',
      templateUrl: 'expansion-overview-example.html',
      styleUrls: ['expansion-overview-example.css'],
    })
    export class ExpansionOverviewExample {
      panelOpenState = false;   
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