import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Observable } from 'rxjs';
import { Record } from 'src/app/core';
import * as moment from 'moment';
@Component({
  selector: 'emp-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss']
})
export class RecordListComponent implements OnInit {

  displayedColumns: string[] = ['index', 'name', 'email', 'dob'];
  dataSource$: Observable<Record[]>;

  constructor(private router: Router, private api: ApiService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  getRecords() {
    this.dataSource$ = this.api.getRecords();
  }

  getFormattedDate(date: Date) {
    return moment(date).format('MM/DD/YYYY');
  }
}


