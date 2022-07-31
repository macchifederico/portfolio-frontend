import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from '../models/Acercade';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  acercaURL = "https://fedemacchi-portfolio.herokuapp.com/api/acercade/"

  constructor(private http: HttpClient) { }

  public lista() : Observable<Acercade[]>{
    return this.http.get<Acercade[]>(this.acercaURL + 'lista');
  }

  public detail(id: number): Observable<Acercade>{
    return this.http.get<Acercade>(this.acercaURL + `detail/${id}`);
  }

  public save(acercade: Acercade): Observable<any>{
    return this.http.post<any>(this.acercaURL + 'crear', acercade);
  }

  public update(id: number, acercade: Acercade): Observable<any>{
    return this.http.put<any>(this.acercaURL + `editar/${id}`, acercade);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.acercaURL + `borrar/${id}`);
  }
}

