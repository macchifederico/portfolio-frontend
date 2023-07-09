import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/models/Skills';
import { SkillsService } from 'src/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private sSkills: SkillsService, private router: Router) { }


  isLogged = false;
  skills: Skills[] = [];

  ngOnInit(): void {
    
  }

  cargarSkill(){
    this.sSkills.lista().subscribe(
      data => {this.skills = data}
        
    )
  }

  delete(id?: number){
    if(id != null){
      this.sSkills.delete(id).subscribe(
        data => {
          alert("Skill borrada con éxito");
          window.location.reload();
          this.router.navigate(['portfolio']);
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}
