import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/models/Educacion';
import { EducacionService } from 'src/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private sEdu: EducacionService) { }

  isLogged: boolean = true;
  educacion: Educacion[] = [];

  ngOnInit(): void {
    
  }

  cargarEducacion(): void{
    this.sEdu.lista().subscribe( data => {this.educacion = data;})
    
  }

  delete(id?: number){
    if(id != null){
      this.sEdu.delete(id).subscribe(
        data => {
          window.location.reload();
        }, err => {
          alert("Educacion borrada con éxito");
          window.location.reload();
        }
      )
    }
  }
}
