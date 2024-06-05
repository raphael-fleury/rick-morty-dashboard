import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationDashboardComponent } from './location-dashboard/location-dashboard.component';
import { CoreModule } from '../core/core.module';
import { LocationService } from './location.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LocationDashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  providers: [LocationService]
})
export class LocationModule { }
