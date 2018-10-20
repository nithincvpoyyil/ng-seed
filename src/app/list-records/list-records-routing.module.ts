import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingPageComponent} from '../dashboard/landing-page/landing-page.component';

const listRecordsRoutes: Routes = [
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listRecordsRoutes)
  ],
  exports: [RouterModule]
})
export class ListRecordsRoutingModule {}
