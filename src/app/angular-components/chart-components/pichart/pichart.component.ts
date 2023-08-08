import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import {Code} from './code';
@Component({
selector: 'app-pichart',
templateUrl: './pichart.component.html',
styleUrls: ['./pichart.component.scss']
})
export class PichartComponent implements OnInit {
code:any;




public pieChartOptions: ChartOptions = {
responsive: true,
};
public pieChartLabels: Label[] = [['Angular'], ['.Net'],['Java'],['pega'],['Devops'] ];
public pieChartData: SingleDataSet = [300, 400, 200, 60, 40];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];

constructor(private eShareDataService : EShareDataService) {
monkeyPatchChartJsTooltip();
monkeyPatchChartJsLegend();
}

ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
}

}
