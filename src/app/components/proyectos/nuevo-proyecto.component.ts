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

  nombrePro: string = '';
  descrPro: string = '';
  urlPro: string = '';

  constructor(private router: Router, private sPro: ProyectoService) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const pro = new Proyecto(this.nombrePro, this.descrPro, this.urlPro);
    this.sPro.save(pro).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }
    )
  }

}
