import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(): boolean {
      this.router.navigate(['/'])
    return false;
  }
}
