import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { SearchBarService } from '../../core/services/search-bar.service';

@Component({
  selector: 'app-character-dashboard',
  templateUrl: './character-dashboard.component.html',
  styleUrl: './character-dashboard.component.css'
})
export class CharacterDashboardComponent {

  private loading = false

  characters: Character[] = []
  pagination = {
    nameFilter: "",
    currentPage: 0,
    hasNext: true
  }

  constructor(
    private characterService: CharacterService,
    private searchBarService: SearchBarService
  ) {
    this.searchBarService.textChanged.subscribe(text => {
      this.filterChanged(text)
    })
  }

  ngOnInit() {
    this.loadCharacters()
  }

  loadCharacters() {
    if (this.loading || !this.pagination.hasNext)
      return

    this.loading = true
    const nameFilter = this.pagination.nameFilter
    const page = this.pagination.currentPage + 1
    this.characterService.getCharacters(nameFilter, page).subscribe({
      next: (page) => {
        this.characters.push(...page.results)
        this.pagination.hasNext = page.info.next !== null
        this.pagination.currentPage++
        this.loading = false
      },
      error: (error) => {
        this.loading = false
        console.error(error)
        if (error.status !== 404) {
          alert("Error on loading characters. Check console for more info.")
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

    this.characters = []
    this.loadCharacters()
  }
}
