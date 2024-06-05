import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarService } from './services/search-bar.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [NavbarComponent],
  providers: [SearchBarService]
})
export class CoreModule { }
