import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDashboardComponent } from './character-dashboard/character-dashboard.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterService } from './character.service';
import { CoreModule } from "../core/core.module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CharacterDashboardComponent,
    CharacterDetailsComponent
  ],
  providers: [CharacterService],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class CharacterModule { }
