import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from 'src/services/token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EditarAcercadeComponent } from './components/acercade/editar-acercade.component';
import { NuevaAcercadeComponent } from './components/acercade/nueva-acercade.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { DeleteExperienciaComponent } from './components/experiencia/delete-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditarHeaderComponent } from './components/header/editar-header.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';
import { NuevoSkillComponent } from './components/skills/nuevo-skill.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    NavbarComponent,
    FooterComponent,
    ProyectosComponent,
    EditarProyectoComponent,
    AcercadeComponent,
    EditarAcercadeComponent,
    NuevaAcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    DeleteExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    EditarSkillComponent,
    NuevoSkillComponent,
    LoginComponent,
    EditarHeaderComponent,
    NuevoProyectoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
