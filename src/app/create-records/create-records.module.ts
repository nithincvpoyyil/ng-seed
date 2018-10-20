import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordComponent } from './create-record/create-record.component';
import { MaterialModule } from '../material/material.module';
import { CreateRecordRoutingModule } from './create-records-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, CreateRecordRoutingModule, FormsModule, MaterialModule, ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [CreateRecordComponent],
  exports: [CreateRecordComponent]
})
export class CreateRecordsModule { }
