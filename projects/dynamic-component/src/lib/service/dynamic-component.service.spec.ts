import { TestBed } from '@angular/core/testing';

import { TikDynamicComponentService } from './dynamic-component.service';

describe('TikDynamicComponentService', () => {
  let service: TikDynamicComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TikDynamicComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
