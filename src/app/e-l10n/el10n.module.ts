import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {} from '../e-l10n/';
// import {
//     L10nConfig,
//     L10nLoader,
//     // LocalizationModule,
//     // LocaleSeoModule,
//   //  LocaleValidationModule,
//     //StorageStrategy,
//     //ProviderType,
//     // ISOCode,
//     // LogLevel
// } from 'angular-l10n';

// import { AppRoutingModule } from './app-routing.module';
import { ESharedModule } from '../e-shared';

// import { AppLangComponent } from './applang.component';
// import { HomeComponent } from './home/home.component';
// import { I18nComponent } from './i18n/i18n.component';
// import { ValidationComponent } from './validation/validation.component';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material.module';

const l10nConfig: any = {
    // logger: {
    //     level: environment.production ? LogLevel.Off : LogLevel.Warn
    // },
    locale: {
        languages: [
            { code: 'en', dir: 'ltr' },
            { code: 'it', dir: 'ltr' },
            { code: 'ar', dir: 'rtl' }
        ],
        defaultLocale: { languageCode: 'en', countryCode: 'US', numberingSystem: 'latn' },
        currency: 'USD',
        // storage: StorageStrategy.Cookie,
        // cookieExpiration: 30
    },
    translation: {
        providers: [
            { prefix: './assets/locale-' }
        ],
        caching: true,
        version: '7.0.0',
        rollbackOnError: true,
        composedKeySeparator: '.',
        missingValue: 'No key',
        i18nPlural: true
    },
    localizedRouting: {
        //format: [ISOCode.Language, ISOCode.Country],
        defaultRouting: false,
        schema: [
            { text: 'United States', languageCode: 'en', countryCode: 'US', numberingSystem: 'latn', currency: 'USD' },
            { text: 'United Kingdom', languageCode: 'en', countryCode: 'GB', numberingSystem: 'latn', currency: 'GBP' },
            { text: 'Italia', languageCode: 'it', countryCode: 'IT', numberingSystem: 'latn', currency: 'EUR' },
            { text: 'المملكة العربية السعودية', languageCode: 'ar', countryCode: 'SA', numberingSystem: 'arab', currency: 'SAR' },
            {
                text: 'المملكة العربية السعودية - Arabic',
                languageCode: 'ar', countryCode: 'SA', numberingSystem: 'latn', currency: 'SAR'
            }
        ]
    }
};

// Advanced initialization.
// export function initL10n(l10nLoader: L10nLoader): Function {
//     return () => l10nLoader.init();
// }

// APP_INITIALIZER will execute the function when the app is initialized and delay what it provides.
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // AppRoutingModule,
          ESharedModule,
          MaterialModule,
          RouterModule,
        // LocalizationModule.forChild(l10nConfig),
        // LocaleSeoModule.forChild()
      //  LocaleValidationModule.forRoot()
    ],
    declarations: [
      //AppLangComponent,
    ],
    providers: [
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: initL10n,
        //     deps: [L10nLoader],
        //     multi: true,
        // }
    ]
})
export class El10nModule { }
