import { TestBed } from '@angular/core/testing';

import { NimkatService } from './nimkat.service';

describe('NimkatService', () => {
  let service: NimkatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NimkatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
