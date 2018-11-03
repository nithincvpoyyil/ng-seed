import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecordsRoutingModule } from './list-records-routing.module';
import { MaterialModule } from '../material/material.module';

import { RecordListComponent } from './record-list/record-list.component';
import { RecordComponent } from './record/record.component';
import { DetailedRecordComponent } from './detailed-record/detailed-record.component';

import { CoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule, ListRecordsRoutingModule, MaterialModule, CoreModule
  ],
  exports: [RecordListComponent, RecordComponent, DetailedRecordComponent],
  declarations: [RecordListComponent, RecordComponent, DetailedRecordComponent]
})
export class ListRecordsModule { }
