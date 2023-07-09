import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/models/Skills';
import { SkillsService } from 'src/services/skills.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  constructor(private sSkill: SkillsService, private router: Router) { }

  skills : Skills = new Skills();
  id: number = 0;

  ngOnInit(): void {
    
  }

  onUpdate(): void{
   
  }

}
