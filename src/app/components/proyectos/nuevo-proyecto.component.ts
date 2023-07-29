import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/models/Proyecto';
import { ProyectoService } from 'src/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  proyecto: Proyecto = new Proyecto();

  constructor(private router: Router, private sPro: ProyectoService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.sPro.crearProyecto(this.proyecto).subscribe({
      next: (res) => {          
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
      error: (err) => {
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
