import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpLaboral } from 'src/models/ExpLaboral';
import { ExplaboralService } from 'src/services/explaboral.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  constructor(private sExp: ExplaboralService, private activatedRoute: ActivatedRoute, private router: Router) { }

  expLab : ExpLaboral = new ExpLaboral();

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];

    this.sExp.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error");
        this.router.navigate(['portfolio']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExp.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia laboral modificada con exito");
        this.router.navigate(['portfolio']);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['portfolio']);
      }
    )
  }

}
