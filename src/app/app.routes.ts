import { Routes } from '@angular/router';
import { CharacterDashboardComponent } from './character-dashboard/character-dashboard.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

export const routes: Routes = [
    { path: 'characters', component: CharacterDashboardComponent },
    { path: 'characters/:id', component: CharacterDetailsComponent },
    { path: '', redirectTo: 'characters', pathMatch: 'full' }
];
