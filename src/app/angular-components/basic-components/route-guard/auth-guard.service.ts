import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
  })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router){

    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean| any {
      return this.authService.isAuthenticated().then((authenticated: boolean| any) => {
        if(authenticated) {
            return true;
        } else {
            this.router.navigate(['/routeguard', {outlets: {basic: 'main'}}]);
        }
      })
  }
}
