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

  acercade: Acercade = new Acercade();
  
  constructor(private sAcerca: AcercadeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const id_persona: number = Number(localStorage.getItem('id'));

    this.sAcerca.save(id_persona, this.acercade).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    })
  }

}