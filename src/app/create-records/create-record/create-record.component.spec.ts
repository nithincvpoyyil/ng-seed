import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecordComponent } from './create-record.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { CoreModule } from 'src/app/core';
import { ApiService } from 'src/app/core/api/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateRecordComponent', () => {
  let component: CreateRecordComponent;
  let fixture: ComponentFixture<CreateRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRecordComponent],
      imports: [MaterialModule, BrowserAnimationsModule,FormsModule, CoreModule, ReactiveFormsModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ApiService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
