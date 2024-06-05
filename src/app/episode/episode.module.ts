import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeService } from './episode.service';
import { EpisodeDashboardComponent } from './episode-dashboard/episode-dashboard.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EpisodeDashboardComponent
  ],
  imports: [CommonModule, CoreModule, SharedModule],
  providers: [EpisodeService]
})
export class EpisodeModule { }
