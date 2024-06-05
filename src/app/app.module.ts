import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { CharacterModule } from './character/character.module';
import { SharedModule } from './shared/shared.module';
import { EpisodeModule } from './episode/episode.module';
import { LocationModule } from './location/location.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CharacterModule,
    EpisodeModule,
    LocationModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
