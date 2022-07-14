import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../auth/login/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.loginService.verifyLogin().pipe(
      tap((res) => {
        if (!res) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.loginService.verifyLogin().pipe(
      tap((res) => {
        if (!res) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }
}
