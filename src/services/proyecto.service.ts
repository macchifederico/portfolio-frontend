import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = "http://localhost:3000/api/proyecto/";

  constructor(private http: HttpClient) { }

  public listaProyectos() : Observable<any>{
    return this.http.get<any>(`${this.URL}`);
  }

  public proyectoPorId(id: any) : Observable<any>{
    return this.http.get<Proyecto>(`${this.URL}/${id}`);
  }

  public crearProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(`${this.URL}`, proyecto);
  }

  public actualizarProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(`${this.URL}`, proyecto);
  }

  public borrarProyecto(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }

}
