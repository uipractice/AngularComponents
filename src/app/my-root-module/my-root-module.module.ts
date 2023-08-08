import { NgModule } from '@angular/core';
// import { PersistenceModule } from 'angular-persistence';
import { ScrollingModule } from '@angular/cdk/scrolling';
//import { EMatComponentsModule } from '../angular-components/basic-components/e-mat-components.module';
import { EModuleModules } from '../e-modules';
import { appRoutes } from '../app.routing';
import { LayoutModule } from '@angular/cdk/layout';
// import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { RouteGuardModule } from '../angular-components/basic-components/route-guard/route-guard.module';
import { AppsModule } from '../angular-components/Apps/apps.module';
import { FormsBlockModule } from '../angular-components/Forms/formsodule.module';
import { AuthenticationModule } from '../angular-components/Authentication/authentications.module';
import { tablesModule } from '../angular-components/Tables/tables.module';

@NgModule({
  declarations: [],
  imports: [
    // PersistenceModule,
    ScrollingModule,
    // EMatComponentsModule,
    EModuleModules,
    appRoutes,
    LayoutModule,
    // NguiAutoCompleteModule,
    RouteGuardModule,
    AppsModule,
    FormsBlockModule,
    AuthenticationModule,
    tablesModule
  ]
})

export class MyRootModuleModule { }
