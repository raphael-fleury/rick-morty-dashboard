import { Component } from '@angular/core';
import { Character } from '../../../character/character.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  character: Character

  constructor(authService: AuthService) {
    this.character = authService.getCharacter()
  }
}
