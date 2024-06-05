import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { Page } from '../shared/models/page.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiURL = "https://rickandmortyapi.com/api/character";

  constructor(private http : HttpClient) { }

  getCharacters(name: string, page: number, limit = 20) {
    return this.http.get<Page<Character>>(this.apiURL, {
      params: {name, page, limit}
    })
  }

  getMultipleCharacters(ids: number[]) {
    return this.http.get<Character[]>(`${this.apiURL}/[${ids.join(',')}]`)
  }

  getCharacterById(id: number) {
    return this.http.get<Character>(`${this.apiURL}/${id}`)
  }
}
