import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedRecordComponent } from './detailed-record.component';

describe('DetailedRecordComponent', () => {
  let component: DetailedRecordComponent;
  let fixture: ComponentFixture<DetailedRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
