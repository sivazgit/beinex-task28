import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{

  constructor(private router:Router) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('currentUser')){
      return true;
    }
    else{
      this.router.navigateByUrl('');
      return false;
    }
  }
}
