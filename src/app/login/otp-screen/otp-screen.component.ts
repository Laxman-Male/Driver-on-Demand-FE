import { CommonModule } from '@angular/common';
import { Component, Input, input, NgModule, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';
import { RideService } from '../../services/ride.service';

 

@Component({
  selector: 'app-otp-screen',
  standalone: true,
  imports: [NgOtpInputModule,CommonModule,FormsModule],
  templateUrl: './otp-screen.component.html',
  styleUrls: ['./otp-screen.component.css'],
  // imports: [NgOtpInputModule],
})
 

export class OtpScreenComponent {
constructor (private router:Router, private rideService: RideService){ }
  otpConfig = {
  length: 6,
  allowNumbersOnly: true,
  
};
@Input() goingToOtp!: string;
otpEnteredByUser:string=''
userEnteredNumber:string=''
otpForValidate!:number;


onOtpChange(otp: string) {
  console.log('OTP:', otp);
  this.otpEnteredByUser=otp;
  console.log("1234")
  console.log(this.otpEnteredByUser)
}

ngOnInit(){
  // let a= localStorage.getItem('userEnterNumber') || ''
  this.userEnteredNumber= this.rideService.getNumberForOtp()
  console.log(this.userEnteredNumber)
  this.otpForValidate= this.rideService.validateOTP()
  console.log(this.otpForValidate)
  
}

 

redirectToName(){
   

    if(Number(this.otpEnteredByUser)== this.otpForValidate){
      this.router.navigate(['name-screen'])
      console.log("going to name")
    } else{
      alert("Entered wrong OTP")
    }

  
}

}



// ng otp is child component for this componet 
// <ng-otp-input></ng-otp-input>

// OtpComponent
//  └── NgOtpInputComponent

//  Config (Parent → Child)
// [config]="otpConfig"

// OTP value (Child → Parent)
// (onInputChange)="onOtpChange($event)"

// Parent → Child (Input)
// Child → Parent (Output)

// Standalone component does NOT mean no parent-child

// [config] is still parent → child

// ng-otp-input is still a child component

// Angular data flow rules never change