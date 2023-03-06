import { TestBed } from '@angular/core/testing';

import { IsGuestService } from './is-guest.service';

describe('IsGuestService', () => {
  let service: IsGuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsGuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
