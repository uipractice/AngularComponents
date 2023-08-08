import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import {Code} from './code';
@Component({
selector: 'app-linechart',
templateUrl: './linechart.component.html',
styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
code:any;
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
public lineChartType: ChartType= 'line';
public lineChartPlugins = [];


constructor(private eShareDataService : EShareDataService) { }

ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
}


}
