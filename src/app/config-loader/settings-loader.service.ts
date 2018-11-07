import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { DEFAULT_BASE_URL } from '../core/constants';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SettingsLoaderService {

  apiKey: string;
  apiURL: string;
  interceptorSkippingHttpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.interceptorSkippingHttpClient = new HttpClient(handler);
  }

  getAPIKey(): string {
    return this.apiKey;
  }
  getAPIBaseURL(): string {
    return this.apiURL;
  }

  handleError(){
    console.error('error');
  }

  /**
   * fetch inital configuration from server based on some default - constant URL as show below
   */
  fetchAPIKeyFromServer(): Promise<any> {
    return this.interceptorSkippingHttpClient.get(`${DEFAULT_BASE_URL}/apikey`).toPromise().then((apiKey: string) => {
      this.apiKey = apiKey;
      return apiKey;
    });
  }
  /**
   * fetch inital configuration from server based on some default - constant URL as show below
   */
  fetchBaseURLFromserver(): Promise<any> {
    return this.interceptorSkippingHttpClient.get(`${DEFAULT_BASE_URL}/apiurl`).pipe(retry(5))
    .toPromise().then((apiURL: string) => {
      this.apiURL = apiURL;
      return apiURL;
    });
  }
  /**
   * Any Async fucntion returning promise
   */
  anyAsyncFunction(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('APP_INITIALISER : Recieved output of an async operation');
        resolve();
      }, 3000);
    });
  }
}
