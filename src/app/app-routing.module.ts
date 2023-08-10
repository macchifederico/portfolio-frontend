import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevaAcercadeComponent } from './components/acercade/nueva-acercade.component';
import { EditarAcercadeComponent } from './components/acercade/editar-acercade.component';
import { NuevoSkillComponent } from './components/skills/nuevo-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditarHeaderComponent } from './components/header/editar-header.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path:'portfolio', component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NuevaExperienciaComponent},
  {path:'editarexp/:id', component:EditarExperienciaComponent},
  {path: 'nuevaedu', component:NuevaEducacionComponent},
  {path: 'editaredu/:id', component:EditarEducacionComponent},
  {path: 'nuevopro', component:NuevoProyectoComponent},
  {path: 'editarpro/:id', component:EditarProyectoComponent},
  {path: 'nuevoacerca', component:NuevaAcercadeComponent},
  {path: 'editaracerca/:id', component:EditarAcercadeComponent},
  {path: 'editarheader', component:EditarHeaderComponent},
  {path: 'nuevoskill', component:NuevoSkillComponent},
  {path: 'editarskill/:id', component:EditarSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
