import { Component, OnInit } from '@angular/core';
import { RideService } from '../services/ride.service';
import { PendingRide } from '../model/ride';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-existing-booking.component.html',
  styleUrls: ['./user-existing-booking.component.css'],
  imports:[CommonModule, FormsModule]
})
export class UserExistingBookingComponent implements OnInit {
  
  userBookings: PendingRide[] = [];
  isLoading: boolean = true;

  constructor(private rideService: RideService, private route:Router) {}

  ngOnInit() {
    // 1. Get the mobile number you stored during login
    const userMobile = localStorage.getItem('userPhoneNumber');

    if (userMobile) {
      this.rideService.getAllUserBookings(userMobile).subscribe({
        next: (data) => {
          this.userBookings = data;
          this.isLoading = false;
          console.log("All user bookings:", this.userBookings);
        },
        error: (err) => {
          console.error("Error fetching history:", err);
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
      alert("User phone not found. Please log in again.");
    }
  }

  gotoHomePage(){
    this.route.navigate([''])
  }
}