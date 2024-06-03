import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from './episode.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private apiURL = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient) { }

  getMultipleEpisodes(ids: number[]) {
    return this.http.get<Episode[]>(`${this.apiURL}/[${ids.join(',')}]`)
  }
}
