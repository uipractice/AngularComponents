export const Code = {
html: {
content: `<div id='linechart'>
<canvas baseChart width="500" height="300"
[datasets]="lineChartData"
[labels]="lineChartLabels"
[options]="lineChartOptions"
[colors]="lineChartColors"
[legend]="lineChartLegend"
[chartType]="lineChartType"
[plugins]="lineChartPlugins">
</canvas>
</div>`,
language: 'html'
},
ts: {
content: `import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
selector: 'app-linechart',
templateUrl: './linechart.component.html',
styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

public lineChartData: ChartDataSets[] = [
{ data: [65, 59, 80, 81, 60, 55, 40], label: 'Series A' },
{ data: [40, 50, 67, 71, 56, 80, 40], label: 'Series B' },
];
public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public lineChartOptions: (ChartOptions & { responsive: true;}) = {
responsive: true,
};
public lineChartColors: Color[] = [
{
borderColor: '#0088d1',
backgroundColor: 'rgba(0,136,209,0.2)',
},
{
borderColor: '#ff9b21',
backgroundColor: 'rgba(255,155,33,0.2)',
},

];
public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];


constructor() { }

ngOnInit() {
}
}

`,
language: 'javascript'
},
css: {
content: `#linechart{
display: block; 
width: 50%;
height: 25%;
}
`,
language: 'css'
}
}