export const Code = {
html: {
content: `<mat-tab-group>
<mat-tab label="First"> Content 1 </mat-tab>
<mat-tab label="Second"> Content 2 </mat-tab>
<mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
`,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-tabs',
templateUrl: './e-mat-tabs.component.html',
styleUrls: ['./e-mat-tabs.component.scss']
})
export class EMatTabsComponent implements OnInit {
constructor() { }
ngOnInit() {
}
}
`,
language: 'javascript'
},
css: {
content: `/** No CSS for this example */`,
language: 'css'
},
bootstrapHtml:{
content:`<ul class="nav nav-tabs">
<li class="active"><a data-toggle="tab" href="#home">Home</a></li>
<li><a data-toggle="tab" href="#menu1">Tab 1</a></li>
<li><a data-toggle="tab" href="#menu2">Tab 2</a></li>
<li><a data-toggle="tab" href="#menu3">Tab 3</a></li>
</ul>
<div class="tab-content">
<div id="home" class="tab-pane fade in active">
<h3>HOME</h3>
<p>Home Content Here</p>
</div>
<div id="menu1" class="tab-pane fade">
<h3>Tab 1</h3>
<p>Tab 1 Contenet Here</p>
</div>
<div id="menu2" class="tab-pane fade">
<h3>Tab 2</h3>
<p>Tab 2 Contenet Here</p>
</div>
<div id="menu3" class="tab-pane fade">
<h3>Tab 3</h3>
<p>Tab 3 Contenet Here</p>
</div>
</div>`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-tabs',
templateUrl: './e-mat-tabs.component.html',
styleUrls: ['./e-mat-tabs.component.scss']
})
export class EMatTabsComponent implements OnInit {
constructor() { }
ngOnInit() {
}
}`,
language: 'TS'
},
bootstrapCSS:{
content:`/* There is no CSS code for Bootstrap*/`,
language: 'CSS'
}
}