import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardTileComponent } from './card-tile/card-tile.component';


@NgModule({
  imports: [
    CommonModule, RouterModule, FlexLayoutModule
  ],
  exports: [LandingPageComponent, CardTileComponent],
  declarations: [LandingPageComponent, CardTileComponent]
})
export class DashboardModule { }
