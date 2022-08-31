import { TestBed } from '@angular/core/testing';

import { FlightWorldService } from './flight-world.service';

describe('FlightWorldService', () => {
  let service: FlightWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
