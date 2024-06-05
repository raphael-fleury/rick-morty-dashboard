import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../location.service';
import { CharacterService } from '../../character/character.service';
import { Character } from '../../character/character.model';
import { Location } from '../location.model';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.css'
})
export class LocationDetailsComponent {

  location!: Location
  residents: Character[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? "");
    if (Number.isNaN(id)) {
      this.router.navigate(['/locations'])
      return
    }

    this.loadLocation(id)
  }

  loadLocation(id: number) {
    this.locationService.getLocationById(id).subscribe({
      next: (location) => {
        this.location = location
        this.loadCharacters()
      },
      error: (error) => {
        if (error.status === 404) {
          this.router.navigate(['/characters'])
          return
        }
  
        console.error(error)
        alert("Error on loading character. Check console for more info.")
      }
    })
  }

  loadCharacters() {
    this.characterService.getMultipleCharacters(this.residentIds).subscribe({
      next: (residents) => { this.residents = residents }
    })
  }

  get residentIds() {
    return this.location.residents.map(url => +url.split('/').pop()!) ?? []
  }
}
