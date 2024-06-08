import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../shared/models/page.model';
import { Location } from './location.model';
import { Service } from '../shared/models/service.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService implements Service<Location> {

  private apiURL = "https://rickandmortyapi.com/api/location";

  constructor(private http: HttpClient) { }

  getAll(name: string, page: number) {
    return this.http.get<Page<Location>>(this.apiURL, {
      params: {name, page}
    })
  }

  getMultiple(ids: number[]): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiURL}/[${ids.join(',')}]`)
  }

  getById(id: number) {
    return this.http.get<Location>(`${this.apiURL}/${id}`)
  }
}
