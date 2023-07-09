import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proURL = "http://localhost:3000/api/proyecto/";

  constructor(private http: HttpClient) { }

  public lista() : Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.proURL + 'lista');
  }

  public detail(id: number) : Observable<Proyecto>{
    return this.http.get<Proyecto>(this.proURL + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.proURL + `crear`, proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(this.proURL + `editar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.proURL + `borrar/${id}`);
  }

}
