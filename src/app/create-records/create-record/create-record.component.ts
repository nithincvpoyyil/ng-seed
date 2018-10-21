import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { Record } from '../../core/models';

@Component({
  selector: 'emp-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.scss']
})
export class CreateRecordComponent implements OnInit {

  email: FormControl;
  name: FormControl;
  address: FormControl;
  dob: FormControl;
  about: FormControl;
  recordForm: FormGroup;

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
    this.api.addRecord(<Record>this.recordForm.value).subscribe(() => {
      console.log("executed");
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}
