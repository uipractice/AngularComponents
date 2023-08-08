import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
selector: 'app-e-mat-video',
templateUrl: './e-mat-video.component.html',
styleUrls: ['./e-mat-video.component.scss']
})
export class EMatVideoComponent implements OnInit {
@Input() video: any;

code:any;

constructor(private eShareDataService : EShareDataService, private sanitizer: DomSanitizer) { }
ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
}
getEmbedUrl() {
if(this.video){
return this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
}else{
return this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/229457692');
}
}
} 
