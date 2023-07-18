import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercade } from 'src/models/Acercade';
import { AcercadeService } from 'src/services/acercade.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-acercade',
  templateUrl: './editar-acercade.component.html',
  styleUrls: ['./editar-acercade.component.css']
})
export class EditarAcercadeComponent implements OnInit {
  
  isLogged: boolean = true;
  
  constructor(private sAcerca: AcercadeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  acercade= new Acercade();

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];

    this.sAcerca.getAcercade(id).subscribe({
      next: (res) => {
        this.acercade = res;
      },
      error: (e) => {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: e.msg,
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  }

  onUpdate(): void{
    const id_persona: number = Number(localStorage.getItem('id'));
    this.sAcerca.update(id_persona, this.acercade).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        })
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
        })
        setTimeout(() => {
          this.router.navigate(['/portfolio']);
        }, 3000);      
      } 
  })
  }
}
