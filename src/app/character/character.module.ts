import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './character.service';
import { CharacterDashboardComponent } from './character-dashboard/character-dashboard.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { SearchBarComponent } from '../core/components/search-bar/search-bar.component';

@NgModule({
  declarations: [CharacterDashboardComponent, CharacterDetailsComponent],
  imports: [CommonModule, SearchBarComponent],
  providers: [CharacterService]
})
export class CharacterModule { }
