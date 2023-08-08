import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ESharedModule } from '../e-shared/index';
import { ESideNavComponent } from './e-sidenav/e-sidenav.component';
import { EToolbarComponent } from './e-toolbar/e-toolbar.component';
import { EDashboardComponent } from './e-dashboard/e-dashboard.component';
// import { PrismModule } from '@ngx-prism/core'; 
import { NgxMdModule } from 'ngx-md';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { EmatFooter } from './e-footer/emat-footer.component';
import { specialPipe } from '../e-shared/specialPipe.pipe';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
 

@NgModule({
  imports: [
    ESharedModule,
    BrowserAnimationsModule,
    HighlightModule,
    NgxMdModule.forRoot(),
    HighlightPlusModule
    //PrismModule,
  ],
  exports: [
    ESideNavComponent,
    EToolbarComponent,
    EDashboardComponent,
    specialPipe,
  ],
  declarations: [
    ESideNavComponent,
    EToolbarComponent,
    EDashboardComponent,
    EmatFooter,
    specialPipe,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EModuleModules { }
