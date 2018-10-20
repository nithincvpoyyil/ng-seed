import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { RoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RoutingModule, DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
