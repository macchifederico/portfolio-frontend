import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/models/Skills';
import { SkillsService } from 'src/services/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  skill: Skills = new Skills();

  constructor(private sSkill: SkillsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.obtenerSkillsPorId(id).subscribe({
      next: (res) => {            
        this.skill = res.skills;
      },
      error: (e) => {
        console.log(e);   
      }
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.actualizarSkill(id, this.skill).subscribe({
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
