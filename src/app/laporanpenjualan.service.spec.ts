import { TestBed, inject } from '@angular/core/testing';

import { LaporanpenjualanService } from './laporanpenjualan.service';

describe('LaporanpenjualanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaporanpenjualanService]
    });
  });

  it('should be created', inject([LaporanpenjualanService], (service: LaporanpenjualanService) => {
    expect(service).toBeTruthy();
  }));
});
