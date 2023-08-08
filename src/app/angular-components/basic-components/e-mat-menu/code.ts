export const Code = {
html: {
content: `
<button mat-raised-button [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu">
<button mat-menu-item>Item 1</button>
<button mat-menu-item>Item 2</button>
</mat-menu> 
`,
language: 'html'
},
ts: {
content: `
import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-menu',
templateUrl: './e-mat-menu.component.html',
styleUrls: ['./e-mat-menu.component.scss']
})
export class EMatMenuComponent implements OnInit {
constructor() { }
ngOnInit() {
}
}
`,
language: 'javascript'
},
css: {
content: `.divcontent{
display: flex;
justify-content: center;
}
.cardcontent{
width: 100%;
height: 100px;
margin: 5px;
}
.cardlayout{
display: flex;
flex-wrap: wrap;
width: 50%;
}
`,
language: 'css'
},
bootstrapHtml:{
content:`<nav class="navbar navbar-inverse"  *ngIf="eShareDataService.bootstrapCode">
<div class="container-fluid">
<div class="navbar-header">
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand" routerLink="/menu">WebSiteName</a>
</div>
<div class="collapse navbar-collapse" id="myNavbar">
<ul class="nav navbar-nav">
<li class="active"><a routerLink="/menu">Home</a></li>
<li class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" routerLink="/menu">Page 1
<span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a routerLink="/menu">Page 1-1</a></li>
<li><a routerLink="/menu">Page 1-2</a></li>
<li><a routerLink="/menu">Page 1-3</a></li>
</ul>
</li>
<li><a routerLink="/menu">Page 2</a></li>
<li><a routerLink="/menu">Page 3</a></li>
</ul>
<ul class="nav navbar-nav navbar-right">
<li><a routerLink="/menu"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
<li><a routerLink="/menu"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
</ul>
</div>
</div>
</nav>`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-menu',
templateUrl: './e-mat-menu.component.html',
styleUrls: ['./e-mat-menu.component.scss']
})
export class EMatMenuComponent implements OnInit {
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