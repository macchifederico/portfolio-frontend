import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/models/Skills';
import { SkillsService } from 'src/services/skills.service';

@Component({
  selector: 'app-nuevo-skill',
  templateUrl: './nuevo-skill.component.html',
  styleUrls: ['./nuevo-skill.component.css']
})
export class NuevoSkillComponent implements OnInit {

  skill: Skills = new Skills();

  constructor(private sSkill: SkillsService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{    
    this.sSkill.crearSkill(this.skill).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}

