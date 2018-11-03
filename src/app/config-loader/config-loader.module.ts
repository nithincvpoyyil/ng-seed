import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { fetchAPIKey, fetchBaseURL, asyncOperation } from './settings.util';
import { SettingsLoaderService } from './settings-loader.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: fetchAPIKey,
      deps: [SettingsLoaderService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: fetchBaseURL,
      deps: [SettingsLoaderService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: asyncOperation,
      deps: [SettingsLoaderService],
      multi: true
    },
  ]
})
export class ConfigLoaderModule { }
