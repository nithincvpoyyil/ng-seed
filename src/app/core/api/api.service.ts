import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Record } from '../models';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  getRecords(): Observable<Record[]> {
    return this.httpClient.get<Record[]>('/records');
  }

  addRecord(record: Record): Observable<any> {
    return this.httpClient.post('/records', record);
  }
}
