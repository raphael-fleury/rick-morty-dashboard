import { Component } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  constructor(public searchBarService: SearchBarService) { }

  timeout: any = null

  onKeyUp(event: any) {
    clearTimeout(this.timeout);
    const service = this.searchBarService;
    this.timeout = setTimeout(function() {
      if (event.keyCode != 13) {
        service.text = event.target.value
      }
    }, 500);
  }
}
