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

  tecnologia: string = '';
  porcentaje: number = 0  ;

  constructor(private sSkill: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills(this.tecnologia, this.porcentaje);
    this.sSkill.save(skill).subscribe(
      data => {
        alert("Skill creada con éxito")
        this.router.navigate(['portfolio']);
      }
    )
  }
}

