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
    if (!this.currentRide) return; // Safety check

    // 1. Get existing rides from localStorage
    const ridesFromStorage = localStorage.getItem('rides');
    let allRides = ridesFromStorage ? JSON.parse(ridesFromStorage) : [];

    // 2. Add the current ride
    allRides.push(this.currentRide);

    // 3. Save back to localStorage
    localStorage.setItem('rides', JSON.stringify(allRides));

    this.rideService.clearCurrentRide();
    this.currentRide = null;
    console.log(this.currentRide);
    if (this.currentRide == null) {
    } else {
    }
  }
}
