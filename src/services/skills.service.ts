import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = "http://localhost:3000/api/skills";

  constructor(private http: HttpClient) { }

  public obtenerListaSkills() : Observable<any>{
    return this.http.get<any>(`${this.URL}`);
  }

  public obtenerSkillsPorId(id: number) : Observable<any>{    
    return this.http.get<any>(`${this.URL}/${id}`);
  }

  public crearSkill(skill: Skills): Observable<any>{
    return this.http.post<any>(`${this.URL}`, skill);
  }

  public actualizarSkill(id: number, skill: Skills): Observable<any>{
    return this.http.put<any>(`${this.URL}/${id}`, skill);
  }

  public borrarSkill(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`);
  }

}
