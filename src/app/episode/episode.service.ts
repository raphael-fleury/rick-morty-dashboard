import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from './episode.model';
import { Page } from '../shared/models/page.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private apiURL = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient) { }

  getEpisodes(name: string, page: number, limit = 20) {
    return this.http.get<Page<Episode>>(this.apiURL, {
      params: {name, page, limit}
    })
  }

  getMultipleEpisodes(ids: number[]) {
    return this.http.get<Episode[]>(`${this.apiURL}/[${ids.join(',')}]`)
  }

  getEpisodeById(id: number) {
    return this.http.get<Episode>(`${this.apiURL}/${id}`)
  }
}
