import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/models/Educacion';
import { AuthService } from 'src/services/auth.service';
import { EducacionService } from 'src/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private sEdu: EducacionService, public authService: AuthService, private router: Router) { }

  educaciones: Educacion[] = [];
  fechaInicio: any;
  fechaFin: any;

  ngOnInit(): void {
    this.cargarEducacion();        
  }

  cargarEducacion(){
    const id_persona = Number(localStorage.getItem('id'));    
    this.sEdu.listaEducaciones(id_persona).subscribe({ 
      next: (res) => {                    
        this.educaciones = res.educaciones;
      },
      error: (e) => {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: e.text,
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    })
  }
  
  delete(id_educacion: any){    
    this.sEdu.delete(id_educacion).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.text,
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          window.location.reload();
        }, 3000);   
      },
      error: (e) => {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: e.text,
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    })
  }
}
