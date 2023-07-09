import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/models/Educacion';
import { EducacionService } from 'src/services/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  constructor(private sEdu: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  edu : Educacion = new Educacion();

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];

    this.sEdu.detail(id).subscribe(
      data =>{
        this.edu = data;
      }, err =>{
        alert("Error");
        this.router.navigate(['portfolio']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEdu.update(id, this.edu).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err =>{
        this.router.navigate(['portfolio']);
      }
    )
  }

}
