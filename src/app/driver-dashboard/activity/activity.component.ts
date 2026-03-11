import { Component } from '@angular/core';
import { DriverCommonNavComponent } from '../driver-common-nav/driver-common-nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity',
  imports: [DriverCommonNavComponent,CommonModule, FormsModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

    pastRides: any[] = [];  // store rides from localStorage

  ngOnInit() {
    const rides = localStorage.getItem('rides');
    this.pastRides = rides ? JSON.parse(rides) : [];
  }

}
