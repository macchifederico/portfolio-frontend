import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Persona } from 'src/models/Persona';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "http://localhost:3000/api/auth";

  constructor(private http: HttpClient, private router: Router) { }

  // registro(){
  //   return this.http.post(`${this.URL}/registro`);
  // }

  login(persona: Persona) : Observable<any>{
    return this.http.post(`${this.URL}/login`, persona);
  }

  loggedIn() {
    return !!localStorage.getItem('token'); //devuelve true si existe token - false si no existe
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    
  }

}
