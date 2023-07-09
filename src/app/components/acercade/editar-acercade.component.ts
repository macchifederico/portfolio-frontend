import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercade } from 'src/models/Acercade';
import { AcercadeService } from 'src/services/acercade.service';

@Component({
  selector: 'app-editar-acercade',
  templateUrl: './editar-acercade.component.html',
  styleUrls: ['./editar-acercade.component.css']
})
export class EditarAcercadeComponent implements OnInit {
  
  isLogged: boolean = true;
  
  constructor(private sAcerca: AcercadeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  acercade= new Acercade();

  ngOnInit(): void {
    
    // const id = this.activatedRoute.snapshot.params['id'];

    // this.sAcerca.detail(id).subscribe(
    //   data =>{
    //     this.acercade = data;
    //   }, err =>{
    //     alert("Error del orto");
    //     this.router.navigate(['portfolio']);
    //   }
    // )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sAcerca.update(id, this.acercade).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err =>{
        this.router.navigate(['portfolio']);
      }
    )
  }

}
