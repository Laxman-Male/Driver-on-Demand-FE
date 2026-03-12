import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { OtpScreenComponent } from './otp-screen/otp-screen.component';
import emailjs from 'emailjs-com';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule, OtpScreenComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor (private router:Router, private rideService:RideService){}

phoneNumber:string=''
passPhoneNumberToChild:string='';
  expiryDate = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes in ms
  expiryTime = this.expiryDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 
// phoneNumber: string = '';        // user-entered mobile number
generatedOtp: string = '';       // store OTP temporarily
// passPhoneNumberToChild: boolean = false;  // trigger child OTP component

// acceptRide(ride: upComingRide){
//   this.rideService.setCurrentRide(ride);
//   this.router.navigate(['/driver-current']);
// }


showOtp() {
  if (!this.phoneNumber) return;

 this.rideService.setNumberForOtp(this.phoneNumber);
 console.log(this.phoneNumber)

  // 1. Generate OTP
  this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

  // 2. Prepare template parameters for EmailJS
  const templateParams = {
    to_email: 'laxmanmale122@gmail.com',  // your   email
    passcode: this.generatedOtp,
     time: this.expiryTime,  
    companyName:"Driver At Door"
  };

  // 3. Send email via EmailJS
  emailjs.send('service_5zk217f', 'template_avdsqoy', templateParams, 'rjAV547HTCe6zd3p3')
    .then(() => {
      console.log('OTP sent to email:', this.generatedOtp);
      this.rideService.storeOTP(Number(this.generatedOtp))
      alert("OTP send to email")
      localStorage.setItem("userPhoneNumber",this.phoneNumber)
       
      this.passPhoneNumberToChild = this.phoneNumber; // pass the number
      this.router.navigate(['/otp-screen'])
    })
    .catch(err => console.error('Failed to send OTP', err));
}
 
goToHome(){
  this.router.navigate([''])
}


}
