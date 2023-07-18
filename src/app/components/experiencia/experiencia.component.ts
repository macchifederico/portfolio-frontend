import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/models/ExpLaboral';
import { AuthService } from 'src/services/auth.service';
import { ExplaboralService } from 'src/services/explaboral.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private sExp: ExplaboralService, private router: Router, public authService: AuthService) { }

  isLogged = false;
  expLaboral: ExpLaboral[] = [];

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      this.cargarExperiencia();
    }
    
  }

  cargarExperiencia(){
    const id_persona = Number(localStorage.getItem('id'));
    this.sExp.lista(id_persona).subscribe({ 
      next: (res) => {        
        this.expLaboral = res.expLaborales;
        
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  delete(id_experiencia?: number){  
    const id_persona = Number(localStorage.getItem('id'));
    if(id_experiencia!= null){
      this.sExp.delete(id_experiencia, id_persona).subscribe({
        next: (res) => {
          alert(res.msg)
          console.log(res);
        },
        error: (e) => {
          console.log(e);
          
        }
      })
    }
    
  }
  
}
