import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api/api.service';
import { Record } from '../../core/models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'emp-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.scss']
})
export class CreateRecordComponent implements OnInit, OnDestroy {

  email: FormControl;
  name: FormControl;
  address: FormControl;
  dob: FormControl;
  about: FormControl;
  recordForm: FormGroup;
  addRecord$: Observable<any>;
  addRecordSubscription: Subscription;

  constructor(private router: Router, private api: ApiService) {

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.name = new FormControl('');
    this.address = new FormControl('');
    this.dob = new FormControl('');
    this.about = new FormControl('');
    this.recordForm = new FormGroup({
      email: this.email,
      name: this.name,
      address: this.name,
      dob: this.dob,
      about: this.about
    });
  }

  ngOnInit() {

  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  submitRecord() {
    this.addRecord$ = this.api.addRecord(<Record>this.recordForm.value);
    this.addRecordSubscription = this.addRecord$.subscribe();
  }
  ngOnDestroy() {
    this.addRecordSubscription.unsubscribe();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}
