import { Component } from '@angular/core';
import { Episode } from '../episode.model';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode-dashboard',
  templateUrl: './episode-dashboard.component.html',
  styleUrl: './episode-dashboard.component.css'
})
export class EpisodeDashboardComponent {
  episodes: Episode[] = []

  constructor(public episodeService: EpisodeService) { }
}
