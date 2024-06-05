import { Component } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
