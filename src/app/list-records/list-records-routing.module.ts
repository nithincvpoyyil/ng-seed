import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecordListComponent } from './record-list/record-list.component';
import { DetailedRecordComponent } from './detailed-record/detailed-record.component';

const listRecordsRoutes: Routes = [
  {
    path: '',
    component: RecordListComponent,
    children: [{
      path: ':id',
      component: DetailedRecordComponent
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(listRecordsRoutes)
  ],
  exports: [RouterModule]
})
export class ListRecordsRoutingModule { }
