import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL = "http://localhost:3000/api/educacion/"

  constructor(private http: HttpClient) { }

  public lista() : Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.eduURL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.eduURL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.eduURL + 'crear', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.eduURL + `editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.eduURL + `borrar/${id}`);
  }
}
