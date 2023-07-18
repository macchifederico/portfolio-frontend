import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpLaboral } from 'src/models/ExpLaboral';
import { ExplaboralService } from 'src/services/explaboral.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  constructor(private sExp: ExplaboralService, private activatedRoute: ActivatedRoute, private router: Router) { }

  expLab : ExpLaboral = new ExpLaboral();

  ngOnInit(): void {
    const id_persona = Number(localStorage.getItem('id'));
    const id_experiencia = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.sExp.detail(id_persona, id_experiencia).subscribe({
      next: (data) => {        
        this.expLab = data.experiencia;        
      },
      error: (e) => {
        console.log(e);
        
      }
    })
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExp.update(id, this.expLab).subscribe({
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
