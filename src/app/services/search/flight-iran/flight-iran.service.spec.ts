import { TestBed } from '@angular/core/testing';

import { FlightIranService } from './flight-iran.service';

describe('FlightIranService', () => {
  let service: FlightIranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightIranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
