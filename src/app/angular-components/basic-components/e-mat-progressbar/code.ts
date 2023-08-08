export const Code = {
html: {
content: `<div fxLayout="row wrap" fxLayoutAlign="start start" class="m-b-30">
<h5 class="m-b-15"> Determinate Progress Model</h5>
<div fxFlex="100" fxLayoutAlign="start start">
<mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
</div>
</div>

<div fxLayout="row wrap" fxLayoutAlign="start start"  class="m-t-30 m-b-30">
<h5  class="m-b-15">Indeterminate  Progress Model</h5>
<div fxFlex="100" fxLayoutAlign="start start">
<mat-progress-bar mode="indeterminate"></mat-progress-bar>
</div>
</div>      
`,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-progressbar',
templateUrl: './e-mat-progressbar.component.html',
styleUrls: ['./e-mat-progressbar.component.scss']
})
export class EMatProgressbarComponent implements OnInit {
constructor() { }
ngOnInit() { }
}

`,
language: 'javascript'
},
css: {
content: `/** No CSS for this example */`,
language: 'css'
},
bootstrapHtml:{
content:`<div class="progress">
<div class="progress-bar" role="progressbar" aria-valuenow="70"
aria-valuemin="0" aria-valuemax="100" style="width:70%">
70%
</div>
</div>
<div class="progress">
<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
aria-valuemin="0" aria-valuemax="100" style="width:40%">
40% Complete (success)
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50"
aria-valuemin="0" aria-valuemax="100" style="width:50%">
50% Complete (info)
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style="width:60%">
60% Complete (warning)
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70"
aria-valuemin="0" aria-valuemax="100" style="width:70%">
70% Complete (danger)
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
40% Complete (success)
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">
50% Complete (info)
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">
60% Complete (warning)
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
70% Complete (danger)
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-striped active" role="progressbar"
aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
40%
</div>
</div>

<div class="progress">
<div class="progress-bar progress-bar-success" role="progressbar" style="width:40%">
Free Space
</div>
<div class="progress-bar progress-bar-warning" role="progressbar" style="width:10%">
Warning
</div>
<div class="progress-bar progress-bar-danger" role="progressbar" style="width:20%">
Danger
</div>
</div>`,
language: 'HTML'
},
bootstrapTS:{
content:`/* There is no TS code for Bootstrap */`,
language: 'TS'
},
bootstrapCSS:{
content:`/* There is no CSS code for Bootstrap*/`,
language: 'CSS'
}
}