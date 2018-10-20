import { CreateRecordsModule } from './create-records.module';

describe('CreateRecordsModule', () => {
  let createRecordsModule: CreateRecordsModule;

  beforeEach(() => {
    createRecordsModule = new CreateRecordsModule();
  });

  it('should create an instance', () => {
    expect(createRecordsModule).toBeTruthy();
  });
});
