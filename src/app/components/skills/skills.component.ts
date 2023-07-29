import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/models/Skills';
import { AuthService } from 'src/services/auth.service';
import { SkillsService } from 'src/services/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private sSkills: SkillsService, private router: Router, public authService: AuthService) { }

  skills: Skills[] = [];

  ngOnInit(): void {
    this.cargarSkill();
  }

  cargarSkill(){
    this.sSkills.obtenerListaSkills().subscribe({
      next: (res) => {
        this.skills = res.skills;                
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  delete(id?: number){    
    if(id != null){
      this.sSkills.borrarSkill(id).subscribe({
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
}
