import { TestBed } from '@angular/core/testing';

import { TikFunctionsService } from './functions.service';

describe('TikFunctionsService', () => {
  let service: TikFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TikFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
