import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import baseUrl from './helper';
import { Superhero } from '../interfaces/superhero';
import { Observable } from 'rxjs';
import { SuperheroWithAbilitiesRequest } from '../interfaces/superherowithabilitiesrequest';
import { SuperheroWithAbilitiesResponse } from '../interfaces/superherowithabilitiesresponse';
@Injectable({
  providedIn: 'root'
})
export class SuperheroeService {

  constructor(private http:HttpClient) { }

  getAllEnabledSuperheroesWithAbilities(): Observable<SuperheroWithAbilitiesResponse[]> {
    return this.http.get<SuperheroWithAbilitiesResponse[]>(`${baseUrl}/superheroes`);
  }

  createSuperhero(superhero: SuperheroWithAbilitiesRequest): Observable<any> {
    return this.http.post<any>(`${baseUrl}/superheroes/crear`, superhero);
  }

  updateSuperhero(superheroId: number,superhero: SuperheroWithAbilitiesRequest): Observable<any>{
    return this.http.put<any>(`${baseUrl}/superheroes/editar/${superheroId}`, superhero);
  }

  deleteSuperhero(superheroId: number): Observable<any> {
    return this.http.patch(`${baseUrl}/superheroes/eliminar/${superheroId}`, null);
  }
}
