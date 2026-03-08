import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DriverCommonNavComponent } from '../driver-common-nav/driver-common-nav.component';

@Component({
  selector: 'app-current',
  imports: [DriverCommonNavComponent],
  templateUrl: './current.component.html',
  styleUrl: './current.component.css'
})
export class CurrentComponent {
constructor (private router:Router){}

  gotoCurrentRide(){
this.router.navigate(['/driver-current'])
  }
  gotoActivityPage(){
    this.router.navigate(['/driver-activity'])
  }
  gotoRewardPage(){
    this.router.navigate(['/driver-reward'])
  }

}
