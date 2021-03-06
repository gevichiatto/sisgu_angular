import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuariosUrl: string;

  constructor(private http: HttpClient) {
    this.usuariosUrl = 'http://localhost:8080/usuarios';
  }

  public findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl);
  }

  public save(usuario: Usuario) {
    return this.http.post<Usuario>(this.usuariosUrl, usuario);
  }

  public update(usuario: Usuario) {
    return this.http.put(this.usuariosUrl, usuario);
  }
}
