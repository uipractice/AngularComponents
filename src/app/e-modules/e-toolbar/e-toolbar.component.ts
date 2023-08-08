import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e-toolbar',
  templateUrl: './e-toolbar.component.html',
  styleUrls: ['./e-toolbar.component.scss']
})
export class EToolbarComponent implements OnInit {
  title = 'Evoke Technologies';

  constructor() { }

  ngOnInit() {
  }

}
