import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillsURL = "http://localhost:3000/api/skills/";

  constructor(private http: HttpClient) { }

  public lista() : Observable<Skills[]>{
    return this.http.get<Skills[]>(this.skillsURL + 'lista');
  }

  public detail(id: number) : Observable<Skills>{
    return this.http.get<Skills>(this.skillsURL + `detail/${id}`);
  }

  public save(skill: Skills): Observable<any>{
    return this.http.post<any>(this.skillsURL + `crear`, skill);
  }

  public update(id: number, skill: Skills): Observable<any>{
    return this.http.put<any>(this.skillsURL + `editar/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.skillsURL + `borrar/${id}`);
  }

}
