import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { Page } from '../shared/models/page.model';
import { Service } from '../shared/models/service.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements Service<Character> {

  private apiURL = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  getAll(name: string, page: number) {
    return this.http.get<Page<Character>>(this.apiURL, {
      params: {name, page}
    })
  }

  getMultiple(ids: number[]) {
    return this.http.get<Character[]>(`${this.apiURL}/[${ids.join(',')}]`)
  }

  getById(id: number) {
    return this.http.get<Character>(`${this.apiURL}/${id}`)
  }
}
