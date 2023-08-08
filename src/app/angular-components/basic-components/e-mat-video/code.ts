export const Code = {
    html: {
      content: ` 
    <iframe [src]="getEmbedUrl()" frameborder="0" class="padding-side" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width:98%;height:98%"></iframe>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
    import { DomSanitizer} from '@angular/platform-browser';
    @Component({
      selector: 'app-e-mat-video',
      templateUrl: './e-mat-video.component.html',
      styleUrls: ['./e-mat-video.component.scss']
    })
    export class EMatVideoComponent implements OnInit {
      @Input() video;
      constructor(private sanitizer: DomSanitizer) { }
    
      ngOnInit() {
        
      }
      getEmbedUrl() {
        if(this.video){
          return this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
        }else{
          return this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/229457692');
        }
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