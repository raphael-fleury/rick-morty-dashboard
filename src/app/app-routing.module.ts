import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDashboardComponent } from './character/character-dashboard/character-dashboard.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { LocationDashboardComponent } from './location/location-dashboard/location-dashboard.component';
import { LocationDetailsComponent } from './location/location-details/location-details.component';
import { EpisodeDashboardComponent } from './episode/episode-dashboard/episode-dashboard.component';
import { EpisodeDetailsComponent } from './episode/episode-details/episode-details.component';
import { LoginComponent } from './core/components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './core/components/profile/profile.component';

const routes: Routes = [
  { path: 'characters', component: CharacterDashboardComponent, canMatch: [authGuard] },
  { path: 'characters/:id', component: CharacterDetailsComponent, canMatch: [authGuard] },
  { path: 'locations', component: LocationDashboardComponent, canMatch: [authGuard] },
  { path: 'locations/:id', component: LocationDetailsComponent, canMatch: [authGuard] },
  { path: 'episodes', component: EpisodeDashboardComponent, canMatch: [authGuard] },
  { path: 'episodes/:id', component: EpisodeDetailsComponent, canMatch: [authGuard] },
  { path: 'profile', component: ProfileComponent, canMatch: [authGuard] },
  { path: '**', redirectTo: 'profile', canMatch: [authGuard] },
  { path: '**', redirectTo: '' },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
