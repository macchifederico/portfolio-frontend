import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/models/Educacion';
import { EducacionService } from 'src/services/educacion.service';

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

  constructor(private sEdu: EducacionService, private router: Router) {
   }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.titulo, this.institucion, this.fechaInicio,this.fechaFin);
    this.sEdu.save(edu).subscribe(
      data => { 
        this.router.navigate(['/portfolio']);
        
      }, err =>{  
        this.router.navigate(['/portfolio']);
        alert("Educacion creada con éxito");      
      }
    )
  }

}
