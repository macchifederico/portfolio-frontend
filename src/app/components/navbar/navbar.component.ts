import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private router : Router, public authService: AuthService) { }

  ngOnInit(): void {
    
  }

  onLogout():void{
    this.authService.logout();
    this.router.navigate(['/login'])  
  }

  login(){
    this.router.navigate(['login']);
  }

}
