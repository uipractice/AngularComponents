export const Code = {
html: {
content: `<mat-card>
<div class="app-toolbar">
<h1 l10nTranslate>app.title</h1>
<span class="fill-remaining-space"></span>
<div class="menu-section">
<button mat-icon-button [matMenuTriggerFor]="countryMenu" aria-label="Open x-positioned menu">
<mat-icon>translate</mat-icon>
</button>
<mat-menu xPosition="before" #countryMenu="matMenu" class="before">
<a *ngFor="let item of countryMenuItems"
(click)="selectLocale(item.languageCode, item.countryCode, item.numberingSystem, item.currency)"
mat-menu-item>
{{ item.text }}
<mat-icon
*ngIf="currentCountry == item.countryCode && currentNumberingSystem == item.numberingSystem">
done</mat-icon>
</a>
</mat-menu>
</div>
</div>
<span l10nTranslate>app.subtitle</span>
<div class="app-content">
<router-outlet></router-outlet>
</div>
</mat-card>   
`,
language: 'html'
},
ts: {
content: `import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { LocaleService, TranslationService, SearchService, L10N_CONFIG, L10nConfigRef } from 'angular-l10n';
@Component({
selector: 'app-lang-root',
templateUrl: './applang.component.html'
})
/**
 * AppComponent class doesn't use decorators
 * because the view uses only directives and not the pipes to get the translation.
 */
export class AppLangComponent implements OnInit, OnDestroy {
code:any;
countryMenuItems: any[];
get currentCountry(): string {
return this.locale.getCurrentCountry();
}
get currentNumberingSystem(): string {
return this.locale.getCurrentNumberingSystem();
}
dir: Direction;
constructor(
@Inject(L10N_CONFIG) private configuration: L10nConfigRef,
private locale: LocaleService,
private translation: TranslationService,
private search: SearchService,
) {
this.countryMenuItems = this.configuration.localizedRouting.schema;
}
ngOnInit(): void {
this.search.updateHead('app');
this.translation.translationChanged().subscribe(
() => {
this.dir = this.locale.getLanguageDirection() as Direction;
}
);
this.translation.translationError.subscribe((error) => {
if (error) {
// console.log(error);
}
});
}
ngOnDestroy(): void { }
selectLocale(language: string, country: string, numberingSystem: string, currency: string): void {
this.locale.setDefaultLocale(language, country, '', numberingSystem);
this.locale.setCurrentCurrency(currency);
}
}

// In this case developer should maintain respective language JSON files like below
======applang.arab.json============

{
"app": {
"title": "Angular التعريب",
"subtitle": "إنه عالم صغير",
"fname":"أثار",
"lname":"التقنيات",
"savings":"مائة مليون- CR"
},
}
======applang.en.json============
{
"app": {
"title": "Angular localization",
"subtitle": "It's a small world",
"fname":"Evoke",
"lname":"Technologies",
"savings":"1000000 - CR"
}
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
content:`<div class="app-toolbar">
<span class="fill-remaining-space"></span>
<div class="menu-section languageBtn">
<span>Select Language: </span> <button mat-raised-button color="primary" [matMenuTriggerFor]="countryMenu" aria-label="Open x-positioned menu">
{{selectedLangVal}}&nbsp; <span style="position: absolute; top:-1px; right:10px;">&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style="position: absolute; right:-10px; top:10px; fill:#fff;"><path d="M5 8l4 4 4-4z"/></svg>								</span>
</button>
<mat-menu xPosition="before" #countryMenu="matMenu" class="before">
<a *ngFor="let item of countryMenuItems"
(click)="selectLocale(item.languageCode, item.countryCode, item.numberingSystem, item.currency,item.text)"
mat-menu-item>
{{ item.text }}
<mat-icon
*ngIf="currentCountry == item.countryCode && currentNumberingSystem == item.numberingSystem">
done</mat-icon>
</a>
</mat-menu>
</div>
</div>
<h4 l10nTranslate style="padding-top:15px;">app.subtitle</h4> 
<!-- <span l10nTranslate>app.sourceCode</span> -->
<table class="static-Table">
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Savings</th>
</tr>
<tr>
<td l10nTranslate>app.fname</td>
<td l10nTranslate>app.lname</td>
<td l10nTranslate>app.savings</td>
</tr>
</table>
<div class="app-content">
<router-outlet></router-outlet>
</div>
`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import {Code} from './code';
import { LocaleService, TranslationService, SearchService, L10N_CONFIG, L10nConfigRef } from 'angular-l10n';
import {EShareDataService} from '../e-shared/e-sharedata.service';

@Component({
selector: 'app-lang-root',
templateUrl: './applang.component.html',

})
/**
 * AppComponent class doesn't use decorators
 * because the view uses only directives and not the pipes to get the translation.
 */
export class AppLangComponent implements OnInit, OnDestroy {
code:any;
selectedLangVal:string = 'United States';
countryMenuItems: any[];

get currentCountry(): string {
return this.locale.getCurrentCountry();
}

get currentNumberingSystem(): string {
return this.locale.getCurrentNumberingSystem();
}

dir: Direction;

constructor(
@Inject(L10N_CONFIG) private configuration: L10nConfigRef,
private locale: LocaleService,
private translation: TranslationService,
private search: SearchService,
public eShareDataService : EShareDataService,
) {
this.countryMenuItems = this.configuration.localizedRouting.schema;
this.code = Code;
this.eShareDataService.pushCode(this.code);
}

ngOnInit(): void {
this.search.updateHead('app');

this.translation.translationChanged().subscribe(
() => {
this.dir = this.locale.getLanguageDirection() as Direction;
}
);

this.translation.translationError.subscribe((error) => {
if (error) {
// console.log(error);
}
});
}

ngOnDestroy(): void { }

selectLocale(language: string, country: string, numberingSystem: string, currency: string, text: string): void {

this.selectedLangVal = text;
this.locale.setDefaultLocale(language, country, '', numberingSystem);
this.locale.setCurrentCurrency(currency);
}

}

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