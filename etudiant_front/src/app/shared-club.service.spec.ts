import { TestBed } from '@angular/core/testing';

import { SharedClubService } from './shared-club.service';

describe('SharedClubService', () => {
  let service: SharedClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
