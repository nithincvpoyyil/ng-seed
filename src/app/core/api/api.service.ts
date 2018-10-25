import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '../models';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = '/';
  constructor(private httpClient: HttpClient) { }

  getRecords(): Observable<Record[]> {
    return this.httpClient.get<Record[]>('/records');
  }

  addRecord(record: Record): Observable<any> {
    return this.httpClient.post('/records', record);
  }
}
