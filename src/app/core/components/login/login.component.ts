import { Component } from '@angular/core';
import { Character } from '../../../character/character.model';
import { CharacterService } from '../../../character/character.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  characters: Character[] = []
  selectedCharacterIndex = 0

  constructor(
    private authService: AuthService,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.characterService.getAll("", 1).subscribe({
      next: (page) => {
        this.characters = page.results
      }
    })
  }

  login() {
    this.authService.login(this.characters[this.selectedCharacterIndex])
    window.location.replace('/')
  }
}
