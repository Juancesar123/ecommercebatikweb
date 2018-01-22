import { TestBed, async, inject } from '@angular/core/testing';

import { AuthlinkGuard } from './authlink.guard';

describe('AuthlinkGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthlinkGuard]
    });
  });

  it('should ...', inject([AuthlinkGuard], (guard: AuthlinkGuard) => {
    expect(guard).toBeTruthy();
  }));
});
