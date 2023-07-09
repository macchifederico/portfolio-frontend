import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(){
    if(this.authService.loggedIn()){
      return true;
    }
    //cambiar a /home
    this.router.navigate(['/login']);
    return false;
  }
  
}
