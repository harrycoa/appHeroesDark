import { environment } from './../../../environments/environment';
import { Heroe } from './../interfaces/heroes.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  private baseUrl: string = environment.baseUrl;

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroePorId(id: string ): Observable<Heroe> {
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`);

  }
}
