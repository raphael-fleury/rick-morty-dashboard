import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollNearEndDirective } from './directives/scroll-near-end.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    ScrollNearEndDirective,
    DropdownComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ScrollNearEndDirective, DropdownComponent, DashboardComponent]
})
export class SharedModule { }
