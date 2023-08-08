export const Code = {
    html: {
    content: `
  <mat-chip-list aria-label="Chip selection">
  <mat-chip>One chip</mat-chip>
  <mat-chip>Two chips</mat-chip>
  <mat-chip color="primary" selected>Primary chip</mat-chip>
  <mat-chip color="accent" selected>Accent chip</mat-chip>
  </mat-chip-list>
    `,
    language: 'html'
    },
    ts: {
    content: `
  import {Component} from '@angular/core';

  import { Component, OnInit } from '@angular/core';

  @Component({
  selector: 'chips-overview-example',
  templateUrl: './chips-overview-example.html',
  styleUrls: ['./chips-overview-example.scss']
  })
  export class EMatChipsComponent implements OnInit {
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
  <div class="chip">
  John Doe
  <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
  </div> `,
    language: 'HTML'
    },
    bootstrapTS:{
    content:`
    /** No Ts for this example */
    `,
    language: 'TS'
    },
    bootstrapCSS:{
    content:`
  .chip {
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
  }
  .closebtn {
  padding-left: 10px;
  color: #888;
  font-weight: bold;
  float: right;
  font-size: 20px;
  cursor: pointer;
  }
    
  .closebtn:hover {
  color: #000;
  }`,
    language: 'CSS'
    }
    }