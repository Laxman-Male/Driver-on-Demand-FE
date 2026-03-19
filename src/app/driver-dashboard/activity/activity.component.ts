import { Component } from '@angular/core';
import { DriverCommonNavComponent } from '../driver-common-nav/driver-common-nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RideService } from '../../services/ride.service';
import { PendingRide } from '../../model/ride';

@Component({
  selector: 'app-activity',
  imports: [DriverCommonNavComponent,CommonModule, FormsModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})

 export class ActivityComponent {
  constructor(private rideService: RideService) {}

  // FIX: Change this from 'PendingRide | null' to 'PendingRide[]'
  completedRides: PendingRide[] = []; 
  
  pastRides: any[] = []; 

  ngOnInit() {
    // ... your localStorage logic ...

    const driverMobile = localStorage.getItem('userPhoneNumber'); 
    
    if (driverMobile) {
      this.rideService.getCompletedRides(driverMobile).subscribe({
        next: (data: PendingRide[]) => { // Good practice to type 'data' here too
          this.completedRides = data;
          console.log("Completed rides loaded:", this.completedRides);
        },
        error: (err) => console.error("Error fetching history", err)
      });
    }
  }
}
