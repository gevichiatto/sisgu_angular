import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../classes/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private perfisUrl: string;

  constructor(private http: HttpClient) {
    this.perfisUrl = 'http://localhost:8080/perfis';
  }

  public findAll(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.perfisUrl);
  }

  public save(perfil: Perfil) {
    return this.http.post<Perfil>(this.perfisUrl, perfil);
  }
}
