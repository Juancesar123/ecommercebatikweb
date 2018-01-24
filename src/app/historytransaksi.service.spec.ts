import { TestBed, inject } from '@angular/core/testing';

import { HistorytransaksiService } from './historytransaksi.service';

describe('HistorytransaksiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistorytransaksiService]
    });
  });

  it('should be created', inject([HistorytransaksiService], (service: HistorytransaksiService) => {
    expect(service).toBeTruthy();
  }));
});
