import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatransaksiComponent } from './datatransaksi.component';

describe('DatatransaksiComponent', () => {
  let component: DatatransaksiComponent;
  let fixture: ComponentFixture<DatatransaksiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatransaksiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
