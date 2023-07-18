import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/models/Proyecto';
import { AuthService } from 'src/services/auth.service';
import { ProyectoService } from 'src/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  constructor(private sPro: ProyectoService, private router: Router, public authService: AuthService) { }

  proyectos: Proyecto[] = [];

  ngOnInit(): void {
   this.cargarExperiencia();
  }

  cargarExperiencia(): void{
    this.sPro.listaProyectos().subscribe({
      next: (res) => {
        this.proyectos = res.proyectos;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  delete(id?: number){
    if(id != null){
      this.sPro.borrarProyecto(id).subscribe(
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
