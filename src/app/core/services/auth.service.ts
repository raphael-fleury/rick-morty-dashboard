import { Injectable } from '@angular/core';
import { Character } from '../../character/character.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn() {
    return !!window.localStorage.getItem('character')
  }

  getCharacter() {
    if (!this.isLoggedIn())
      return null

    return JSON.parse(window.localStorage.getItem('character')!)
  }

  login(character: Character) {
    window.localStorage.setItem('character', JSON.stringify(character))
  }

  logout() {
    window.localStorage.removeItem('character')
    window.location.replace('/')
  }
}
