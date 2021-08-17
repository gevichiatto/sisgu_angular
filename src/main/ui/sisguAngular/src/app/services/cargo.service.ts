import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../classes/cargo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private cargosUrl: string;

  constructor(private http: HttpClient) { 
    this.cargosUrl = 'http://localhost:8080/cargos';
  }

  public findAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.cargosUrl);
  }

  public save(cargo: Cargo) {
    return this.http.post<Cargo>(this.cargosUrl, cargo);
  }

}
