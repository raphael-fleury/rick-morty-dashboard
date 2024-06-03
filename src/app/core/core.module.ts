import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchBarService } from './services/search-bar.service';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SearchBarComponent],
  providers: [SearchBarService]
})
export class CoreModule { }
