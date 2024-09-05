import { TestBed } from '@angular/core/testing';

import { MovapiService } from './movapi.service';

describe('MovapiService', () => {
  let service: MovapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
