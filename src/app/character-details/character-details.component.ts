import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';
import { Episode } from '../models/episode.model';
import { EpisodeService } from '../episode.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css',
  standalone: true,
  imports: [NgIf, NgFor]
})
export class CharacterDetailsComponent {

  Math: Math
  character!: Character
  episodes: Episode[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private episodeService: EpisodeService
  ) { this.Math = Math }

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? "");
    if (Number.isNaN(id)) {
      this.router.navigate(['/characters'])
      return
    }

    this.loadCharacter(id)
  }

  loadCharacter(id: number) {
    this.characterService.getCharacterById(id).subscribe({
      next: (character) => {
        this.character = character
        this.loadEpisodes()
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

  loadEpisodes() {
    this.episodeService.getMultipleEpisodes(this.episodeIds).subscribe({
      next: (episodes) => { this.episodes = episodes }
    })
  }

  get originId() {
    return this.character?.origin.url.split('/').pop()
  }

  get locationId() {
    return this.character?.location.url.split('/').pop()
  }

  get episodeIds() {
    return this.character?.episode.map(url => +url.split('/').pop()!) ?? []
  }
}
