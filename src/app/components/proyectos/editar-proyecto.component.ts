import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/models/Proyecto';
import { ProyectoService } from 'src/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  constructor(private sPro: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  proyecto: Proyecto =  new Proyecto();

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPro.proyectoPorId(id).subscribe({
      next: (res) => {        
        this.proyecto = res.proyectos;
      },
      error: (e) => {
        console.log(e);   
      }
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPro.actualizarProyecto(this.proyecto).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
          }),
          setTimeout(() => {
            this.router.navigate(['/portfolio']);
          }, 3000);    
      },
      error: (e) => {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: e.msg,
          showConfirmButton: false,
          timer: 2000
          }),
          setTimeout(() => {
            this.router.navigate(['/portfolio']);
          }, 3000); 
      }
    })
  }
}
