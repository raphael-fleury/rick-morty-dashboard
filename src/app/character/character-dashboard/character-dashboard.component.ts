import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-dashboard',
  templateUrl: './character-dashboard.component.html',
  styleUrl: './character-dashboard.component.css'
})
export class CharacterDashboardComponent {
  characters: Character[] = []
  
  constructor(public characterService: CharacterService) { }
}
