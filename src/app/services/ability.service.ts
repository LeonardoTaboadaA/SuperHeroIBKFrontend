import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import baseUrl from './helper';
import { Ability } from '../interfaces/ability';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor(private http:HttpClient) { }

  getAllEnabledAbilities(): Observable<Ability[]> {
    return this.http.get<Ability[]>(`${baseUrl}/habilidades`);
  }
}
