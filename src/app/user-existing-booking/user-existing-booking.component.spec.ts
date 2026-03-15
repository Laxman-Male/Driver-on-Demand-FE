import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExistingBookingComponent } from './user-existing-booking.component';

describe('UserExistingBookingComponent', () => {
  let component: UserExistingBookingComponent;
  let fixture: ComponentFixture<UserExistingBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExistingBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserExistingBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
