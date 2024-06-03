import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDashboardComponent } from './character/character-dashboard/character-dashboard.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';

const routes: Routes = [
  { path: 'characters', component: CharacterDashboardComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
