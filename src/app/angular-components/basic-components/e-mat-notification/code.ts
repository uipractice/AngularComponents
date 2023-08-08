export const Code = {
html: {
content: `<p>
<span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
</p>
<p>
Button with a badge on the left
<button mat-raised-button color="primary"
matBadge="8" matBadgePosition="before" matBadgeColor="accent">
Action
</button>
</p>
<p>
Icon with a badge
<mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
<!-- Include text description of the icon's meaning for screen-readers -->
<span class="cdk-visually-hidden">
Example with a home icon with overlaid badge showing the number 15
</span>
</p>
`,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-e-mat-notification',
templateUrl: './e-mat-notification.component.html',
styleUrls: ['./e-mat-notification.component.scss']
})
export class EMatNotificationComponent implements OnInit {
constructor() { }
ngOnInit() {}
}
`,
language: 'javascript'
},
css: {
content: `
/** No CSS for this example */
`,
language: 'css'
},
bootstrapHtml:{
content:`<button type="button" class="btn btn-primary">
Primary Notifications &nbsp; <i class="fas fa-home"></i> <span class="badge">7</span>
</button>
<button type="button" class="btn btn-success">
Success Notifications &nbsp;<i class="fas fa-check"></i><span class="badge">3</span>
</button>
<button type="button" class="btn btn-danger">
Danger Notifications &nbsp;<i class="fas fa-bell"></i> <span class="badge">5</span>
</button> `,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-e-mat-notification',
templateUrl: './e-mat-notification.component.html',
styleUrls: ['./e-mat-notification.component.scss']
})
export class EMatNotificationComponent implements OnInit {
constructor() { }
ngOnInit() {}
}
`,
language: 'TS'
},
bootstrapCSS:{
content:`.btn-primary .badge{
  color: #fff;
  background-color: #337ab7;
}
.btn-success .badge{
  background: #449d44;
  color:#fff;
}
.btn-danger .badge{
  background: #d43f3a;
  color:#fff;
}
.btn-primary .badge, .btn-success .badge, .btn-danger .badge {
  top: -17px;
  right: -25px;
}
.container{
  width:100% !important;
}`,
language: 'CSS'
}
}