import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CreateRecordComponent } from './create-record/create-record.component';

const createRecordRoutes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  {
    path: 'create',
    component: CreateRecordComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(createRecordRoutes)
  ],
  exports: [RouterModule]
})
export class CreateRecordRoutingModule { }

