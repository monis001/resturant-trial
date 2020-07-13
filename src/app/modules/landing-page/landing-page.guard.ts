import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class LandingPageGuardService implements CanActivate {
  constructor(public router: Router) {}
  // authentication check or if state is already in preference
  canActivate(): boolean {
    if(localStorage.getItem('myState') === null){
        // this.router.navigate(['catalogue']);
        return true ;
    }else {
        return true ;
    }
  }
}