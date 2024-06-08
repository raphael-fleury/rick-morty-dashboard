import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchBarService } from '../../../core/services/search-bar.service';
import { Service } from '../../models/service.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Input({required: true})
  service!: Service<any>

  @Output()
  updateEntities = new EventEmitter<any[]>()

  private loading = false

  entities: any[] = []
  pagination = {
    nameFilter: "",
    currentPage: 0,
    hasNext: true
  }

  constructor(
    private searchBarService: SearchBarService
  ) {
    this.searchBarService.textChanged.subscribe(text => {
      this.filterChanged(text)
    })
  }

  ngOnInit() {
    this.loadEntities()
  }

  loadEntities() {
    if (this.loading || !this.pagination.hasNext)
      return

    this.loading = true
    const nameFilter = this.pagination.nameFilter
    const page = this.pagination.currentPage + 1
    this.service.getAll(nameFilter, page).subscribe({
      next: (page) => {
        this.entities.push(...page.results)
        this.pagination.hasNext = page.info.next !== null
        this.pagination.currentPage++
        this.loading = false
        this.updateEntities.emit(this.entities)
      },
      error: (error) => {
        this.loading = false
        console.error(error)
        if (error.status !== 404) {
          alert("Error on loading entities. Check console for more info.")
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

    this.entities = []
    this.updateEntities.emit(this.entities)
    this.loadEntities()
  }
}
