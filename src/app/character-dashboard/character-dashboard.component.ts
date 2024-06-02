import { Component } from '@angular/core';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';
import { NgIf } from '@angular/common';
import { ScrollNearEndDirective } from '../shared/directives/scroll-near-end.directive';

@Component({
  selector: 'app-character-dashboard',
  standalone: true,
  templateUrl: './character-dashboard.component.html',
  styleUrl: './character-dashboard.component.css',
  imports: [CharacterCardComponent, NgIf, ScrollNearEndDirective]
})
export class CharacterDashboardComponent {

  public characters: Character[] = [];
  public pagination = {
    currentPage: 0,
    hasNext: true
  }

  constructor(
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.loadCharacters()
  }

  loadCharacters() {
    if (!this.pagination.hasNext)
      return

    const page = this.pagination.currentPage + 1
    this.characterService.getCharacters(page).subscribe({
      next: (page) => {
        this.characters.push(...page.results)
        this.pagination.hasNext = page.info.next !== null
        this.pagination.currentPage++
      },
      error: (error) => console.error(error)
    })
  }
}
