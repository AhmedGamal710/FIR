import { Injectable } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupGuard implements CanActivate{

  constructor(private as: AuthService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean| Observable<boolean> | Promise<boolean> {
      return new Promise ( resolve => {
        this.as.user.subscribe(user => {
          if (user){
          this.router.navigate([`/`])
            resolve (false);}
          else  resolve(true);
        })
      })
  }
}
