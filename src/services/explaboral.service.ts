import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../models/ExpLaboral';



@Injectable({
  providedIn: 'root'
})
export class ExplaboralService {

  expURL = "http://localhost:3000/api/experiencia/"

  constructor(private http: HttpClient) { }

  public lista() : Observable<ExpLaboral[]>{
    return this.http.get<ExpLaboral[]>(this.expURL);
  }

  public detail(id: number): Observable<any>{
    return this.http.get<any>(this.expURL + `detail/${id}`);
  }

  public save(experiencia: ExpLaboral): Observable<any>{
    return this.http.post<any>(this.expURL + 'crear', experiencia);
  }

  public update(id: number, experiencia: ExpLaboral): Observable<any>{
    return this.http.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `borrar/${id}`);
  }
}
