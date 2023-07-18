import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acercade } from 'src/models/Acercade';
import { AcercadeService } from 'src/services/acercade.service';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  constructor(private sAcerca : AcercadeService, public authService: AuthService, private router: Router) { }
  
  isLogged = false;
  acercade: Acercade = new Acercade();

  ngOnInit(): void {
    this.authService.getToken();
    this.cargarAcercade();
  }

  cargarAcercade(){
    const id_persona: number = Number(localStorage.getItem('id'));
    if(!id_persona){
      console.log("No se encontro el id de la persona");
    }else{
      this.sAcerca.getAcercade(id_persona).subscribe({
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
          setTimeout(() => {
            this.router.navigate(['/portfolio']);
          }, 3000);
        }
      })
    } 
  }

  delete(id?: number){
    if(id != null){
      this.sAcerca.delete(id).subscribe({
        next: (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.text,
            showConfirmButton: false,
            timer: 2000
          })    
        },
        error: (e) => {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: e.text,
            showConfirmButton: false,
            timer: 2000
          })    
        }
      })
    }
    
  }

  
}
