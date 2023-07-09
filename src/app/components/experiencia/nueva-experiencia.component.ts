import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/models/ExpLaboral';
import { ExplaboralService } from 'src/services/explaboral.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';
  empresaE: string = '';

  constructor(private sExp: ExplaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new ExpLaboral(this.nombreE, this.empresaE, this.descripcionE);
    this.sExp.save(expe).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err => {
        alert("Experiencia laboral borrada con éxito")
        this.router.navigate(['portfolio']);
      }
      )
  }
}
