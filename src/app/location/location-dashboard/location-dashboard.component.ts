import { Component } from '@angular/core';
import { Location } from '../location.model';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-dashboard',
  templateUrl: './location-dashboard.component.html',
  styleUrl: './location-dashboard.component.css'
})
export class LocationDashboardComponent {
  locations: Location[] = []

  constructor(public locationService: LocationService) { }
}
