import { ListRecordsModule } from './list-records.module';

describe('ListRecordsModule', () => {
  let listRecordsModule: ListRecordsModule;

  beforeEach(() => {
    listRecordsModule = new ListRecordsModule();
  });

  it('should create an instance', () => {
    expect(listRecordsModule).toBeTruthy();
  });
});
