import { Component } from '@angular/core';
import { Episode } from '../episode.model';
import { Character } from '../../character/character.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodeService } from '../episode.service';
import { CharacterService } from '../../character/character.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.css'
})
export class EpisodeDetailsComponent {
  episode!: Episode
  characters: Character[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? "");
    if (Number.isNaN(id)) {
      this.router.navigate(['/episodes'])
      return
    }

    this.loadEpisode(id)
  }

  loadEpisode(id: number) {
    this.episodeService.getById(id).subscribe({
      next: (episode) => {
        this.episode = episode
        this.loadCharacters()
      },
      error: (error) => {
        if (error.status === 404) {
          this.router.navigate(['/episodes'])
          return
        }

        console.error(error)
        alert("Error on loading episode. Check console for more info.")
      }
    })
  }

  loadCharacters() {
    this.characterService.getMultiple(this.characterIds).subscribe({
      next: (characters) => { this.characters = characters }
    })
  }

  get characterIds() {
    return this.episode.characters.map(url => +url.split('/').pop()!) ?? []
  }
}
