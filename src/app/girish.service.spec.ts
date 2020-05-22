import { TestBed } from '@angular/core/testing';

import { GirishService } from './girish.service';

describe('GirishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GirishService = TestBed.get(GirishService);
    expect(service).toBeTruthy();
  });
});
