import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { Code } from './code';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';

@Component({
selector: 'app-dualslider',
templateUrl: './dualslider.component.html',
styleUrls: ['./dualslider.component.scss']
})
export class DualsliderComponent implements OnInit {
code: any;

value: number = 1000;
highValue: number = 500;
options: Options = {
floor: 100,
ceil: 5000
};

constructor(public eShareDataService: EShareDataService) { }

ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
}  
}
