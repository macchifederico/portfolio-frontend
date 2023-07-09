import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/models/Proyecto';
import { ProyectoService } from 'src/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  constructor(private sPro: ProyectoService, private router: Router) { }

  isLogged = false;
  proyectos: Proyecto[] = [];

  ngOnInit(): void {
   
  }

  cargarExperiencia(): void{
    this.sPro.lista().subscribe( 
      data => {this.proyectos = data;

      })
  }

  delete(id?: number){
    if(id != null){
      this.sPro.delete(id).subscribe(
        data => {
          alert("Proyecto borrado con éxito");
          window.location.reload();
        }, err => {
          alert("Error al borrar el proyecto");
          window.location.reload();
        }
      )
    }
    
  }

}
