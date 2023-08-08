export const Code = {
html: {
content: `<mat-icon svgIcon="accessibility"></mat-icon>
<mat-icon svgIcon="accessible_forward"></mat-icon>
<mat-icon svgIcon="accessible"></mat-icon>
<mat-icon svgIcon="account_balance_wallet"></mat-icon>
<mat-icon svgIcon="account_balance"></mat-icon>`,
language: 'html'
},
ts: {
content: `import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

/**
 * @title SVG icons
 */
@Component({
selector: 'icon-svg-example',
templateUrl: 'icon-svg-example.html',
styleUrls: ['icon-svg-example.css'],
})
export class IconSvgExample {
constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
iconRegistry.addSvgIcon('accessibility',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-accessibility-24px.svg'));
iconRegistry.addSvgIcon('accessible_forward',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-accessible_forward-24px.svg'));
iconRegistry.addSvgIcon('accessible',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-accessible-24px.svg'));
iconRegistry.addSvgIcon('account_balance_wallet',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-account_balance_wallet-24px.svg'));
iconRegistry.addSvgIcon('account_balance',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-account_balance-24px.svg'));     
}
}
`,
language: 'javascript'
},
css: {
content: `
/* No styles for this example */

`,
language: 'css'
},
bootstrapHtml:{
content:`<i class="fa fa-user"></i>
<i class="fab fa-stack-overflow"></i>
<i class="far fa-thumbs-up"></i>
<i class="fas fa-bell"></i>
<i class="fas fa-blind"></i>
<i class="fas fa-calendar-alt"></i>
`,
language: 'HTML'
},
bootstrapTS:{
content:`import {Component} from '@angular/core';
@Component({
selector: 'icon-svg-example',
templateUrl: 'icon-svg-example.html',
styleUrls: ['icon-svg-example.css'],
})
export class IconSvgExample {
constructor() {}
`,
language: 'TS'
},
bootstrapCSS:{
content:`
/*  No styles for this example */
`,
language: 'CSS'
}
}
