import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/models/Educacion';
import { EducacionService } from 'src/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  titulo: string = '';
  institucion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';

  edu: Educacion = new Educacion();

  constructor(private sEdu: EducacionService, private router: Router) {
   }

  ngOnInit(): void {
  }

  onCreate(){
    this.sEdu.save(this.edu).subscribe({
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
