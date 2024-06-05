import { Component } from '@angular/core';
import { Location } from '../location.model';
import { LocationService } from '../location.service';
import { SearchBarService } from '../../core/services/search-bar.service';

@Component({
  selector: 'app-location-dashboard',
  templateUrl: './location-dashboard.component.html',
  styleUrl: './location-dashboard.component.css'
})
export class LocationDashboardComponent {
  private loading = false

  locations: Location[] = []
  pagination = {
    nameFilter: "",
    currentPage: 0,
    hasNext: true
  }

  constructor(
    private locationService: LocationService,
    private searchBarService: SearchBarService
  ) {
    this.searchBarService.textChanged.subscribe(text => {
      this.filterChanged(text)
    })
  }

  ngOnInit() {
    this.loadLocations()
  }

  loadLocations() {
    if (this.loading || !this.pagination.hasNext)
      return

    this.loading = true
    const nameFilter = this.pagination.nameFilter
    const page = this.pagination.currentPage + 1
    this.locationService.getLocations(nameFilter, page).subscribe({
      next: (page) => {
        this.locations.push(...page.results)
        this.pagination.hasNext = page.info.next !== null
        this.pagination.currentPage++
        this.loading = false
      },
      error: (error) => {
        this.loading = false
        console.error(error)
        if (error.status !== 404) {
          alert("Error on loading locations. Check console for more info.")
        }
      }
    })
  }

  private filterChanged(text: string) {
    this.pagination = {
      nameFilter: text,
      currentPage: 0,
      hasNext: true
    }

    this.locations = []
    this.loadLocations()
  }
}
