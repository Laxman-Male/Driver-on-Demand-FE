import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DriverCommonNavComponent } from './driver-common-nav/driver-common-nav.component';
import { upComingRide } from '../model/ride';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-driver-dashboard',
  imports: [DriverCommonNavComponent,CommonModule, FormsModule],
  templateUrl: './driver-dashboard.component.html',
  styleUrl: './driver-dashboard.component.css'
})
export class DriverDashboardComponent {
constructor(
  private router: Router,
  private rideService: RideService

){}upComingRides:upComingRide[]=[
{
    rideType: 'Hourly Ride',
    name: 'Rajesh Kumar',
    pickup: 'Andheri West, Mumbai',
    drop: 'Bandra East, Mumbai',
    dateTime: '2025-11-17 at 10:00 AM',
    car: 'Toyota Innova - MH 02 AB 1234',
    duration: '3 hours',
    distance: '12 km'
  },
   {
    rideType: 'One Way Ride',
    name: 'Amit Sharma',
    pickup: 'Borivali, Mumbai',
    drop: 'Dadar, Mumbai',
    dateTime: '2025-11-18 at 02:00 PM',
    car: 'Honda City - MH 01 CD 5678',
    duration: '2 hours',
    distance: '18 km'
  },
  {
    rideType: 'Hourly Ride',
    name: 'Sneha Patil',
    pickup: 'Thane West',
    drop: 'Powai',
    dateTime: '2025-11-19 at 09:30 AM',
    car: 'Hyundai Creta - MH 03 EF 1111',
    duration: '4 hours',
    distance: '22 km'
  },
  {
    rideType: 'Round Trip',
    name: 'Rohit Mehta',
    pickup: 'Vashi',
    drop: 'Pune',
    dateTime: '2025-11-20 at 06:00 AM',
    car: 'Toyota Fortuner - MH 04 GH 2222',
    duration: '8 hours',
    distance: '150 km'
  },
  {
    rideType: 'One Way Ride',
    name: 'Pooja Singh',
    pickup: 'Malad',
    drop: 'Colaba',
    dateTime: '2025-11-21 at 01:00 PM',
    car: 'Maruti Ertiga - MH 02 JK 3333',
    duration: '3 hours',
    distance: '25 km'
  }
];


goToHome(){
  this.router.navigate([''])
}

acceptRide(ride: upComingRide){
  this.rideService.setCurrentRide(ride);
  this.router.navigate(['/driver-current']);
}
 

}
