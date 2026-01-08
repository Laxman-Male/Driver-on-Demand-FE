import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(private route:Router){}
  
goToHome(){
  this.route.navigate([''])
}


// function applyCoupon(code) {
//     alert("Coupon applied: " + code);
// }

// function simpleAction(name) {
//     alert(name + " clicked");
// }

// function logoutUser() {
//     alert("Logging out...");
// }

}
