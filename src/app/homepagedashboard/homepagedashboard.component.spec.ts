import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagedashboardComponent } from './homepagedashboard.component';

describe('HomepagedashboardComponent', () => {
  let component: HomepagedashboardComponent;
  let fixture: ComponentFixture<HomepagedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
