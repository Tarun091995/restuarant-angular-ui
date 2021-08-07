import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerReservationComponent } from './list-customer-reservation.component';

describe('ListCustomerReservationComponent', () => {
  let component: ListCustomerReservationComponent;
  let fixture: ComponentFixture<ListCustomerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
