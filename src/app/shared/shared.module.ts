import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollNearEndDirective } from './directives/scroll-near-end.directive';

@NgModule({
  declarations: [
    ScrollNearEndDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ScrollNearEndDirective]
})
export class SharedModule { }
