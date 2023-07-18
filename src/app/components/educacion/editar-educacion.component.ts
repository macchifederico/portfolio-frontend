import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/models/Educacion';
import { EducacionService } from 'src/services/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  constructor(private sEdu: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  edu : Educacion = new Educacion();

  ngOnInit(): void {
    const id_persona = localStorage.getItem('id');
    const id_educacion = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.sEdu.educacionPorId(id_persona, id_educacion).subscribe({
      next: (data) => {                
        this.edu = data.educacion;        
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  onUpdate(){
    this.sEdu.update(this.edu).subscribe({
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
