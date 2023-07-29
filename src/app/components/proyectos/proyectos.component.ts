import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/models/Proyecto';
import { AuthService } from 'src/services/auth.service';
import { ProyectoService } from 'src/services/proyecto.service';
import Swal from 'sweetalert2';

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
      this.sPro.borrarProyecto(id).subscribe({ 
        next: res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.text,
            showConfirmButton: false,
            timer: 2000
          })
          setTimeout(() => {
            this.router.navigate(['/portfolio']);
          }, 3000);
        },
        error: err => {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: err.text,
            showConfirmButton: false,
            timer: 2000
          })
          setTimeout(() => {
            this.router.navigate(['/portfolio']);
          }, 3000);
        }
      })
    }
    
  }

}
