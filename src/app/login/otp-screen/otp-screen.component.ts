import { CommonModule } from '@angular/common';
import { Component, Input, input, NgModule, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';

// @NgModule({
//   imports: [
//     NgOtpInputModule,
//   ],
// })
// @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput: NgOtpInputComponent;

@Component({
  selector: 'app-otp-screen',
  standalone: true,
  imports: [NgOtpInputModule,CommonModule],
  templateUrl: './otp-screen.component.html',
  styleUrls: ['./otp-screen.component.css'],
  // imports: [NgOtpInputModule],
})
// @Component({
//   standalone: true,
//   imports: [NgOtpInputModule],
// })

export class OtpScreenComponent {
constructor (private router:Router){ }
  otpConfig = {
  length: 4,
  allowNumbersOnly: true,
  
};
@Input() goingToOtp!: string;
otpEnteredByUser:string=''
userEnteredNumber:string=''

onOtpChange(otp: string) {
  console.log('OTP:', otp);
  this.otpEnteredByUser=otp;
  console.log("1234")
  console.log(this.otpEnteredByUser)
}

ngOnInit(){
  let a= localStorage.getItem('userEnterNumber') || ''
  this.userEnteredNumber= a;
}

//  ngOnChanges(changes: SimpleChange) :void {
//     if (changes.goingToOtp) { // 👈 dot notation works safely
//       console.log('Phone received in child:', changes.goingToOtp.currentValue);
//     }
//   }

//   let phoneNum = "";
// const phone = document.getElementById("phone").value;
// phoneNum = "+91- "+phone;
// document.getElementById("phoneNumber").innerText = phoneNum;

// function redirectToName() {
//      window.location.href = "name.html";
//      return;
// }
// updateOtpValue() {
//   this.ngOtpInput.setValue('12345'); // Replace with your OTP value.
// }

redirectToName(){
  if(localStorage.getItem('userEnterNumber')){

    if(this.otpEnteredByUser=='1234'){
      this.router.navigate(['name-screen'])
      console.log("going to name")
    } else{
      alert("wrong OTP")
    }

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