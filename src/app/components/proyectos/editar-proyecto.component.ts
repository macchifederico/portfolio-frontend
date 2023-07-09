import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/models/Proyecto';
import { ProyectoService } from 'src/services/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  constructor(private sPro: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  proyecto=  new Proyecto();

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];

    this.sPro.detail(id).subscribe({
      next: (data) => {
        this.proyecto = data;
      },
      error: (e) => {
        console.log(e);   
      }
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPro.update(id, this.proyecto).subscribe(
      data => {
      }, err =>{
        this.router.navigate(['portfolio']);

      }
    )
  }
}
