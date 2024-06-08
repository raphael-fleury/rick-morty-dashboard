import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from './episode.model';
import { Page } from '../shared/models/page.model';
import { Service } from '../shared/models/service.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService implements Service<Episode> {

  private apiURL = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient) { }

  getAll(name: string, page: number) {
    return this.http.get<Page<Episode>>(this.apiURL, {
      params: {name, page}
    })
  }

  getMultiple(ids: number[]) {
    return this.http.get<Episode[]>(`${this.apiURL}/[${ids.join(',')}]`)
  }

  getById(id: number) {
    return this.http.get<Episode>(`${this.apiURL}/${id}`)
  }
}
