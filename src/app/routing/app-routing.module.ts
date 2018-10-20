import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../dashboard/landing-page/landing-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'list',
    loadChildren: '../list-records/list-records.module#ListRecordsModule'
  },
  {
    path: 'add',
    loadChildren: '../create-records/create-records.module#CreateRecordsModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
