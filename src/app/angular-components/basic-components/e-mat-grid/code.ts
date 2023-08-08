export const Code = {
html: {
content: ` 
<mat-grid-list cols="2" rowHeight="2:1">
<mat-grid-tile>1</mat-grid-tile>
<mat-grid-tile>2</mat-grid-tile>
<mat-grid-tile>3</mat-grid-tile>
<mat-grid-tile>4</mat-grid-tile>
</mat-grid-list>
`,
language: 'html'
},
ts: {
content: `
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-e-mat-grid',
templateUrl: './e-mat-grid.component.html',
styleUrls: ['./e-mat-grid.component.scss']
})
export class EMatGridComponent {
}
`,
language: 'javascript'
},
css: {
content: `
mat-grid-tile {
background: lightblue;
}          `,
language: 'css'
},
bootstrapHtml:{
content:`<div class="container-fluid">
<div class="row">
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
<div class="col-sm-1">.col-sm-1</div>
</div>
<div class="row">   
<div class="col-sm-2">.col-sm-2</div>
<div class="col-sm-2">.col-sm-2</div>
<div class="col-sm-2">.col-sm-2</div>
<div class="col-sm-2">.col-sm-2</div>
<div class="col-sm-2">.col-sm-2</div>
<div class="col-sm-2">.col-sm-2</div>
</div>
<div class="row">
<div class="col-sm-3">.col-sm-3</div>
<div class="col-sm-3">.col-sm-3</div>
<div class="col-sm-3">.col-sm-3</div>
<div class="col-sm-3">.col-sm-3</div>
</div>
<div class="row">
<div class="col-sm-4">.col-sm-4</div>
<div class="col-sm-4">.col-sm-4</div>
<div class="col-sm-4">.col-sm-4</div>  
</div>
<div class="row">
<div class="col-sm-5">.col-sm-5</div>
<div class="col-sm-7">.col-sm-7</div> 
</div>
<div class="row">
<div class="col-sm-6">.col-sm-6</div>
<div class="col-sm-6">.col-sm-6</div> 
</div>
<div class="row">
<div class="col-sm-7">.col-sm-7</div>
<div class="col-sm-5">.col-sm-5</div> 
</div>
<div class="row">
<div class="col-sm-8">.col-sm-8</div>
<div class="col-sm-4">.col-sm-4</div> 
</div>
<div class="row">
<div class="col-sm-9">.col-sm-9</div>
<div class="col-sm-3">.col-sm-3</div> 
</div>
<div class="row">
<div class="col-sm-10">.col-sm-10</div>
<div class="col-sm-2">.col-sm-2</div> 
</div>
<div class="row">
<div class="col-sm-11">.col-sm-11</div>
<div class="col-sm-1">.col-sm-1</div> 
</div>
<div class="row">
<div class="col-sm-12">.col-sm-12</div>
</div>
</div>
`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-e-mat-grid',
templateUrl: './e-mat-grid.component.html',
styleUrls: ['./e-mat-grid.component.scss']
})
export class EMatGridComponent implements OnInit {
constructor() { }
ngOnInit() {}
}
`,
language: 'TS'
},
bootstrapCSS:{
content:`.col-sm-1 {
  background: #ddd;
  border: 1px solid #ffb605;
  padding: 10px;
  }
  .col-sm-2 {
  background: lightskyblue;
  border: 1px solid #006699;
  padding: 10px;
  }
  .col-sm-3{
  background: lightcoral;
  border:1px solid lightblue;
  padding:10px;
  }
  .col-sm-4{
  background: lightseagreen;
  border:1px solid lightsalmon;
  padding:10px;
  }
  .col-sm-5{
  background: mediumorchid;
  border:1px solid mediumpurple;
  padding:10px;
  }
  .col-sm-6{
  background: mediumslateblue;
  border:1px solid midnightblue;
  padding:10px;
  }
  .col-sm-7{
  background: olive;
  border:1px solid olivedrab;
  padding:10px;
  }
  .col-sm-8{
  background: orchid;
  border:1px solid palegoldenrod;
  padding:10px;
  }
  .col-sm-9{
  background: palegreen;
  border:1px solid purple;
  padding:10px;
  }
  .col-sm-10{
  background: rebeccapurple;
  border:1px solid rosybrown;
  padding:10px;
  }
  .col-sm-11{
  background: royalblue;
  border:1px solid saddlebrown;
  padding:10px;
  }
  .col-sm-12{
  background: salmon;
  border:1px solid sandybrown;
  padding:10px;
  }
 
`,
language: 'CSS'
}
}