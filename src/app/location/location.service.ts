import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../shared/models/page.model';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiURL = "https://rickandmortyapi.com/api/location";

  constructor(private http : HttpClient) { }

  getLocations(name: string, page: number, limit = 20) {
    return this.http.get<Page<Location>>(this.apiURL, {
      params: {name, page, limit}
    })
  }

  getLocationById(id: number) {
    return this.http.get<Location>(`${this.apiURL}/${id}`)
  }
}
