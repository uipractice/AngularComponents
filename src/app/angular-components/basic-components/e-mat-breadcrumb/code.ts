export const Code = {
html: {
content: `<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item active" aria-current="page">Home</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item">
<a href="">Home</a>
</li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item">
<a href="">Home</a>
</li>
<li class="breadcrumb-item">
<a href="">Library</a>
</li>
<li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>
`,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-e-mat-breadcrumb',
templateUrl: './e-mat-breadcrumb.component.html',
styleUrls: ['./e-mat-breadcrumb.component.scss']
})
export class EMatBreadcrumbComponent implements OnInit { }`,
language: 'javascript'
},
css: {
content: `/** No CSS for this example */
`,
language: 'css'
},
bootstrapHtml:{
content:`<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item active" aria-current="page">Home</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item">
<a href="">Home</a>
</li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item">
<a href="">Home</a>
</li>
<li class="breadcrumb-item">
<a href="">Library</a>
</li>
<li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>
`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-e-mat-breadcrumb',
templateUrl: './e-mat-breadcrumb.component.html',
styleUrls: ['./e-mat-breadcrumb.component.scss']
})
export class EMatBreadcrumbComponent implements OnInit { }
`,
language: 'TS'
},
bootstrapCSS:{
content:`
/* There is no CSS code for Bootstrap*/
`,
language: 'CSS'
}
}