import { Component, OnInit } from '@angular/core';
import { Acercade } from 'src/models/Acercade';
import { AcercadeService } from 'src/services/acercade.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  constructor(private sAcerca : AcercadeService) { }
  
  isLogged = false;
  acercade: Acercade = new Acercade();

  ngOnInit(): void {
    this.cargarAcercade();
  }

  cargarAcercade(){
    const id_persona: number = Number(localStorage.getItem('id'));
    console.log(id_persona);
      
    if(!id_persona){
      console.log("No se encontro el id de la persona");
    }else{
      this.sAcerca.getAcercade(id_persona).subscribe({
        next: (data) => {
          this.acercade = data;      
        },
        error: (e) => {
          console.error(e);
        }
      })
    } 
  }

  delete(id?: number){
    if(id != null){
      this.sAcerca.delete(id).subscribe(
        data => {
          alert("Experiencia borrada con éxito");
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
    
  }

  
}
