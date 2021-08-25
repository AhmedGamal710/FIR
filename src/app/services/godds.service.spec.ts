import { TestBed } from '@angular/core/testing';

import { GoddsService } from './godds.service';

describe('GoddsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoddsService = TestBed.get(GoddsService);
    expect(service).toBeTruthy();
  });
});
