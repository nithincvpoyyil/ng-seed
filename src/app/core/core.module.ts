import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule, HttpModule, HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: [ApiService]
})
export class CoreModule { }
