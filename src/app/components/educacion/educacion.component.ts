import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/models/Educacion';
import { AuthService } from 'src/services/auth.service';
import { EducacionService } from 'src/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private sEdu: EducacionService, public authService: AuthService) { }

  educaciones: Educacion[] = [];

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
        console.log(e);
      }
    })
  }
  
  delete(id_educacion: any){    
    this.sEdu.delete(id_educacion).subscribe({
      next: (res) => {
        alert(res.msg)
      },
      error: (e) => {
        console.log(e);
        
      }
    })
  }
}
