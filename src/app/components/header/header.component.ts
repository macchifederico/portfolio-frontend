import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/models/Persona';
import { PersonaService } from 'src/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sPersona : PersonaService, private activatedRoute : ActivatedRoute) { }

  persona: Persona[] = [];
  isLogged = false;
  urlLinkedin = "https://www.linkedin.com/in/federico-macchi-50572525";

  ngOnInit(): void {
   
  }

  cargarPersona(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.lista().subscribe( 
      data => {this.persona = data;
      })
  }
}