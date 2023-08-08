import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'app-e-mat-slider',
  templateUrl: './e-mat-slider.component.html',
  styleUrls: ['./e-mat-slider.component.scss']
})
export class EMatSliderComponent implements OnInit {

  code:any;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 1000;
  min = 0;
  showTicks = false;
  step = 10;
  thumbLabel = false;
  value = 100;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }

}
