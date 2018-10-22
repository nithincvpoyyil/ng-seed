import { TestBed } from '@angular/core/testing';
import { defer, of } from 'rxjs';

import { ApiService } from './api.service';
import { Record } from './models';

let service: ApiService;
let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('ApiService', () => {

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new ApiService(<any>httpClientSpy);
  });


  it('should add a record', () => {

    const date = new Date();
    const record: Record = { 'email': 'test@email.com', about: 'about section', dob: date, name: 'NewName' };
    const expectedResponse = null;

    httpClientSpy.post.and.returnValue(of(false));

    service.addRecord(record);

    expect(httpClientSpy.post).toHaveBeenCalledWith('/records', {
      'email': 'test@email.com',
      about: 'about section',
      dob: date,
      name: 'NewName'
    });

  });


  it('should get all records', () => {
    const expectedResponse: Record[] = [{ 'email': 'test@email.com', about: 'about section', dob: new Date(), name: 'NewName' },
                              { 'email': 'test@email.com', about: 'about section', dob: new Date(), name: 'NewName' }];

    httpClientSpy.get.and.returnValues(asyncData(expectedResponse));

    service.getRecords().subscribe((recordList) => expect(recordList).toEqual(expectedResponse, 'expected heroes'));

    expect(httpClientSpy.get).toHaveBeenCalledWith('/records');

  });
});
