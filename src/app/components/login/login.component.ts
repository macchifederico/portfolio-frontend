import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/models/Persona';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isLogged = false;
  isLogginFail = false;
  email !: string;
  password! : string;
  roles : string[] = [];
  errMsj! : string;


  constructor(private authService: AuthService,
              private router: Router){
  }

  ngOnInit(): void {
    
  }

  // onLogin(): void{
  //   this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
  //   this.authService.login(this.loginUsuario).subscribe( data => {
  //       this.isLogged = true;
  //       this.isLogginFail = false;
  //       this.tokenService.setToken(data.token);
  //       this.tokenService.setUsername(data.nombreUsuario);
  //       this.tokenService.setAuthorities(data.authorities);
  //       this.roles = data.authorities;
  //       this.router.navigate(['portfolio']);
  //     }, err => {
  //       this.isLogged = false;
  //       this.isLogginFail = true;
  //       this.errMsj = err.error.mensaje;
  //       console.log(this.errMsj);
        
  //     }
  //   )
  // }

  login(){
   this.authService.login(this.email, this.password).subscribe({
     next: (res) => {
      if(res){
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
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
      }
    },
     error: (err) => {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: err.error.text,
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          document.location.reload();
        }, 2000);
     }
   })
  }

  
}
