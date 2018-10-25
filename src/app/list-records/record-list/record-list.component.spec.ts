import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordListComponent } from './record-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('RecordListComponent', () => {
  let component: RecordListComponent;
  let fixture: ComponentFixture<RecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordListComponent],
      imports: [RouterModule.forRoot([]), MaterialModule,HttpClientModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
