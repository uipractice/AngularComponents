import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ESharedModule } from "../../../e-shared";
import { RouteGuardComponent } from "./route-guard.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard.service";
import { ELayoutComponent } from "..";

const myRoutes: Routes = [
  {
    path: "routeguard",
    component: ELayoutComponent,
    children: [
      {
        path: "main",
        component: RouteGuardComponent,
        outlet: "basic",
        data: { name: "Route Guard", type: "Custom" },
        children: [
          {
            path: "home",
            component: HomeComponent,
            outlet: "standard",
          },
          {
            path: "servers",
            component: ServersComponent,
            outlet: "standard",
            canActivate: [AuthGuard]
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [ESharedModule, RouterModule.forChild(myRoutes)],
  declarations: [RouteGuardComponent, HomeComponent, ServersComponent],
  providers: [AuthGuard, AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RouteGuardModule {}
