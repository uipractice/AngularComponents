export const Code = {
html: {
content: `<div id='barchart'>
<canvas baseChart 
[datasets]="barChartData"
[labels]="barChartLabels"
[options]="barChartOptions"
[plugins]="barChartPlugins"
[legend]="barChartLegend"
[chartType]="barChartType">
</canvas>
</div>   `,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import {Code} from './code';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
selector: 'app-barchart',
templateUrl: './barchart.component.html',
styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
code:any;

public barChartOptions: ChartOptions = {
responsive: true,
};
public barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];

public barChartData: ChartDataSets[] = [
{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
{ data: [23, 44, 43, 20, 85, 27, 52], label: 'Series C' }
];

constructor(private eShareDataService : EShareDataService) { }

ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
}

}
`,
language: 'javascript'
},
css: {
content: `#barchart{
display: block; 
width: 50%;
height: 40%;
}
`,
language: 'css'
}
}