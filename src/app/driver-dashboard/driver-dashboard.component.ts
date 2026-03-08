import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DriverCommonNavComponent } from './driver-common-nav/driver-common-nav.component';

@Component({
  selector: 'app-driver-dashboard',
  imports: [DriverCommonNavComponent],
  templateUrl: './driver-dashboard.component.html',
  styleUrl: './driver-dashboard.component.css'
})
export class DriverDashboardComponent {
constructor (private router:Router){}
upComingRide={}

//   gotoCurrentRide(){
// this.router.navigate(['/driver-current'])
//   } 
//   gotoActivityPage(){
//     this.router.navigate(['/driver-activity'])
//   }
//   gotoRewardPage(){
//     this.router.navigate(['/driver-reward'])

//   }

// this.upComingRide = {

// } || {}

}
