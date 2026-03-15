import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-existing-booking',
  imports: [],
  templateUrl: './user-existing-booking.component.html',
  styleUrl: './user-existing-booking.component.css'
})
export class UserExistingBookingComponent {

  constructor(private route:Router){}

  gotoHomePage(){
    
    this.route.navigate([''])
  }
}
