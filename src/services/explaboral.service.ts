import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../models/ExpLaboral';



@Injectable({
  providedIn: 'root'
})
export class ExplaboralService {

  URL = "http://localhost:3000/api/experiencia"

  constructor(private http: HttpClient) { }

  public lista(id_persona: any) : Observable<any>{
    return this.http.get<any>(`${this.URL}`, id_persona);
  }

  public detail(id_persona: any, id_experiencia: any) : Observable<any>{
    return this.http.get<any>(`${this.URL}/${id_experiencia}`, id_persona);
  }

  public save(experiencia: ExpLaboral): Observable<any>{
    return this.http.post<any>(`${this.URL}`, experiencia);
  }

  public update(id_persona: number, experiencia: ExpLaboral): Observable<any>{
    return this.http.put<any>(`${this.URL}/${id_persona}`, experiencia);
  }

  public delete(id_experiencia: number, id_persona: any): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id_experiencia}`, id_persona);
  }
}
