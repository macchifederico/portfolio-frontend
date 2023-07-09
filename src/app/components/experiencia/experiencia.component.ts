import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/models/ExpLaboral';
import { ExplaboralService } from 'src/services/explaboral.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  constructor(private sExp: ExplaboralService, private router: Router) { }

  isLogged = false;
  expLaboral: ExpLaboral[] = [];

  ngOnInit(): void {
    
  }

  cargarExperiencia(): void{
    this.sExp.lista().subscribe( 
      data => {this.expLaboral = data;
      })
  }

  delete(id?: number){
    if(id != null){
      this.sExp.delete(id).subscribe(
        data => {
          this.router.navigate(['portfolio']);
          window.location.reload();
        }, err => {
          window.location.reload();

        }
      )
    }
    
  }
  
}
