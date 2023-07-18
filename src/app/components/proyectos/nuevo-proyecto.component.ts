import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/models/Proyecto';
import { ProyectoService } from 'src/services/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  proyecto: Proyecto = new Proyecto();

  constructor(private router: Router, private sPro: ProyectoService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.sPro.crearProyecto(this.proyecto).subscribe({
      next: (data) => {          
        console.log(data);
      },
      error: (e) => {
        console.log(e);
        
      }
    })
  }

}
