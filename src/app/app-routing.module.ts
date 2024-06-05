import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDashboardComponent } from './character/character-dashboard/character-dashboard.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { LocationDashboardComponent } from './location/location-dashboard/location-dashboard.component';
import { LocationDetailsComponent } from './location/location-details/location-details.component';

const routes: Routes = [
  { path: 'characters', component: CharacterDashboardComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'locations', component: LocationDashboardComponent },
  { path: 'locations/:id', component: LocationDetailsComponent },
  { path: '', redirectTo: 'characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
