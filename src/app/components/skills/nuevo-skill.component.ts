import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/models/Skills';
import { SkillsService } from 'src/services/skills.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.text,
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          this.router.navigate(['/portfolio']);
        }, 3000);
      },
      error: (err) => {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: err.text,
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          this.router.navigate(['/portfolio']);
        }, 3000);
      }
    })
  }
}

