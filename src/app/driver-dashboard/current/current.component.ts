import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DriverCommonNavComponent } from '../driver-common-nav/driver-common-nav.component';
import { RideService } from '../../services/ride.service';
import { PendingRide, upComingRide } from '../../model/ride';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-current',
  imports: [DriverCommonNavComponent, CommonModule, FormsModule],
  templateUrl: './current.component.html',
  styleUrl: './current.component.css',
})
export class CurrentComponent {
  constructor(
    private rideService: RideService,
    private router: Router,
  ) {}
  currentRide: PendingRide | null = null;
  // @Input() fromUpcoming!: PendingRide;
  

  ngOnInit() {
    this.currentRide = this.rideService.getCurrentRideInCurrentRide()
    console.log("---------",this.currentRide)
  }

  gotoCurrentRide() {
    this.router.navigate(['/driver-current']);
  }
  gotoActivityPage() {
    this.router.navigate(['/driver-activity']);
  }
  gotoRewardPage() {
    this.router.navigate(['/driver-reward']);
  }

  completeRide() {
  // 1. Safety check: If there's no ride data, we can't process payment
  if (!this.currentRide) {
    console.error("No active ride found to complete.");
    alert("Error: No active ride data found.");
    return;
  }

  // 2. Capture the ID from the local object
  const bookingId = this.currentRide.bookingId;

  // 3. User Confirmation (Good UX for critical actions)
  const confirmComplete = confirm(`Are you sure you want to end the ride for Booking ID: ${bookingId}? This will generate the final bill.`);

  if (confirmComplete) {
    console.log("Generating invoice for Booking ID:", bookingId);

    /** * 4. Clear the 'Bridge' data in the service. 
     * This marks the driver as 'Available' in the local state 
     * so they don't see this ride again if they hit 'Back'.
     */
    this.rideService.clearCurrentRide();
    
    // 5. Reset local component variable to clean up the UI
    this.currentRide = null;

    /** * 6. Navigate to the Payment Screen.
     * We pass the ID in the URL so the PaymentComponent can 
     * fetch the fare from the Go backend.
     */
    this.router.navigate(['/payment', bookingId]);
  }
}
}
