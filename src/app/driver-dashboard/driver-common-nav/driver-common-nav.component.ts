import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-common-nav',
  imports: [],
  templateUrl: './driver-common-nav.component.html',
  styleUrl: './driver-common-nav.component.css'
})
export class DriverCommonNavComponent {

  constructor (private router:Router){}

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
  
  gotoCurrentRide(){
this.router.navigate(['/driver-current'])
  }
  gotoActivityPage(){
    this.router.navigate(['/driver-activity'])
  }
  gotoRewardPage(){
    this.router.navigate(['/driver-reward'])
  }
  gotoDashboradUpcomingRide(){
    this.router.navigate(['/driver-dashboard'])
  }
goToHome(){
  this.router.navigate([''])
}

}
