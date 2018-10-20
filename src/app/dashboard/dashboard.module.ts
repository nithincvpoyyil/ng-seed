import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardTileComponent } from './card-tile/card-tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LandingPageComponent, CardTileComponent],
  declarations: [LandingPageComponent, CardTileComponent]
})
export class DashboardModule { }
