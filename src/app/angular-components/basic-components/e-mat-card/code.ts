export const Code = {
    html: {
      content: `
  <mat-card>
  <mat-card-title>Title</mat-card-title>
  <mat-card-subtitle>Subtitle</mat-card-subtitle>
  <mat-card-content>
  <p>Card Content</p>
  </mat-card-content>
  <mat-card-actions>
  <button mat-button>LIKE</button>
  <button mat-button>SHARE</button>
  </mat-card-actions>
  </mat-card>

  `,
      language: 'html'
    },
    ts: {
      content: `
  import { Component, OnInit } from '@angular/core';
  @Component({
  selector: 'app-e-mat-card',
  templateUrl: './e-mat-card.component.html',
  styleUrls: ['./e-mat-card.component.scss']
  })
  export class EMatCardComponent implements OnInit{

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
  <div class="card" style="width: 30rem;">
  <div class="card-body">
  <h5 class="card-title">Card title</h5>
  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
  </div>
  </div>
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