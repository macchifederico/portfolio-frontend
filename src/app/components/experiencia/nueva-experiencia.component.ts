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

  expe: ExpLaboral = new ExpLaboral();

  constructor(private sExp: ExplaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.sExp.save(this.expe).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}
