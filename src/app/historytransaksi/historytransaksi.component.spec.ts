import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorytransaksiComponent } from './historytransaksi.component';

describe('HistorytransaksiComponent', () => {
  let component: HistorytransaksiComponent;
  let fixture: ComponentFixture<HistorytransaksiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorytransaksiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorytransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
