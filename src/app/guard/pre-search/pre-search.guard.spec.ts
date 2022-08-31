import { TestBed } from '@angular/core/testing';

import { PreSearchGuard } from './pre-search.guard';

describe('PreSearchGuard', () => {
  let guard: PreSearchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreSearchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
