import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = "http://localhost:3000/api/educacion"

  constructor(private http: HttpClient) { }

  public listaEducaciones(id_persona: any) : Observable<any>{
    return this.http.get<any>(`${this.URL}`, id_persona);
  }

  public educacionPorId(id_persona: any, id_educacion: number): Observable<any>{
    return this.http.get<any>(`${this.URL}/${id_educacion}`, id_persona);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.http.post<any>(`${this.URL}`, educacion);
  }

  public update(educacion: Educacion): Observable<any>{
    return this.http.put<any>(`${this.URL}`, educacion);
  }

  public delete(id_educacion: any): Observable<any>{    
    return this.http.delete<any>(`${this.URL}/${id_educacion}`);
  }
}
