import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './models/character.model';
import { Page } from './models/page.model';

@Injectable({
  providedIn: 'root',
  deps: [HttpClient]
})
export class CharacterService {

  private apiURL = "https://rickandmortyapi.com/api/character";

  constructor(private http : HttpClient) { }

  getCharacters(page: number, limit = 20) {
    return this.http.get<Page<Character>>(this.apiURL, {
      params: {page, limit}
    })
  }
}