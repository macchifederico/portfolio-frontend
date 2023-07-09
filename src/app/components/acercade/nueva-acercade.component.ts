import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acercade } from 'src/models/Acercade';
import { AcercadeService } from 'src/services/acercade.service';

@Component({
  selector: 'app-nueva-acercade',
  templateUrl: './nueva-acercade.component.html',
  styleUrls: ['./nueva-acercade.component.css']
})
export class NuevaAcercadeComponent implements OnInit {

  presentProf: string = '';
  
  constructor(private sAcerca: AcercadeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const nuevoAcerca = new Acercade(this.presentProf);

    this.sAcerca.save(nuevoAcerca).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err => {
        this.router.navigate(['portfolio']);
      }
      )
  }

}
