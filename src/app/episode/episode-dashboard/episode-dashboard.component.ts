import { Component } from '@angular/core';
import { Episode } from '../episode.model';
import { EpisodeService } from '../episode.service';
import { SearchBarService } from '../../core/services/search-bar.service';

@Component({
  selector: 'app-episode-dashboard',
  templateUrl: './episode-dashboard.component.html',
  styleUrl: './episode-dashboard.component.css'
})
export class EpisodeDashboardComponent {
  private loading = false

  episodes: Episode[] = []
  pagination = {
    nameFilter: "",
    currentPage: 0,
    hasNext: true
  }

  constructor(
    private episodeService: EpisodeService,
    private searchBarService: SearchBarService
  ) {
    this.searchBarService.textChanged.subscribe(text => {
      this.filterChanged(text)
    })
  }

  ngOnInit() {
    this.loadEpisodes()
  }

  loadEpisodes() {
    if (this.loading || !this.pagination.hasNext)
      return

    this.loading = true
    const nameFilter = this.pagination.nameFilter
    const page = this.pagination.currentPage + 1
    this.episodeService.getEpisodes(nameFilter, page).subscribe({
      next: (page) => {
        this.episodes.push(...page.results)
        this.pagination.hasNext = page.info.next !== null
        this.pagination.currentPage++
        this.loading = false
      },
      error: (error) => {
        this.loading = false
        console.error(error)
        if (error.status !== 404) {
          alert("Error on loading episodes. Check console for more info.")
        }
      }
    })
  }

  private filterChanged(text: string) {
    this.pagination = {
      nameFilter: text,
      currentPage: 0,
      hasNext: true
    }

    this.episodes = []
    this.loadEpisodes()
  }
}
