import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from '../models/Acercade';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  URL = "http://localhost:3000/api/acercade"

  constructor(private http: HttpClient) { }

  public getAcercade(id_persona: any): Observable<any>{
    return this.http.get<any>(`${this.URL}`, id_persona);
  }

  public save(acercade: Acercade): Observable<any>{
    return this.http.post<any>(`${this.URL}/crear`, acercade);
  }

  public update(id: number, acercade: Acercade): Observable<any>{
    return this.http.put<any>(this.URL + `editar/`, {id, acercade});
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}

