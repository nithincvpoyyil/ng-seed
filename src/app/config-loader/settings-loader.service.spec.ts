import { TestBed } from '@angular/core/testing';

import { SettingsLoaderService } from './settings-loader.service';

describe('SettingsLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsLoaderService = TestBed.get(SettingsLoaderService);
    expect(service).toBeTruthy();
  });
});
