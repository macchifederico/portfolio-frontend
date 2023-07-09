import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL = 'http://localhost:3000/api/personas/';

  constructor(private http: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personaURL+'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.personaURL + `detail/${id}`);
  }

  public save(acercade: Persona): Observable<any>{
    return this.http.post<any>(this.personaURL + 'crear', acercade);
  }

  public update(id: number, acercade: Persona): Observable<any>{
    return this.http.put<any>(this.personaURL + `editar/${id}`, acercade);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.personaURL + `borrar/${id}`);
  }

}
