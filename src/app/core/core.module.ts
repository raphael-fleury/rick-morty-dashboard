import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarService } from './services/search-bar.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule, SharedModule
  ],
  exports: [NavbarComponent],
  providers: [SearchBarService]
})
export class CoreModule { }
