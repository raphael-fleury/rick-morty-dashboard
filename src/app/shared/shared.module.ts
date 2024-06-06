import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollNearEndDirective } from './directives/scroll-near-end.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    ScrollNearEndDirective,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ScrollNearEndDirective, DropdownComponent]
})
export class SharedModule { }
