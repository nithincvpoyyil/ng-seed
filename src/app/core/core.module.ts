import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptorService } from './api/apiinterceptor.service';
@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: [ApiService, {
    // Defined interceptor provider here becoz of lazy loaded module;
    // Please see this link https://github.com/angular/angular/issues/20575 for more details
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptorService,
    multi: true
  }]
})
export class CoreModule { }
