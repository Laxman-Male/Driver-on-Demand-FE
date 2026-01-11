import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { OtpScreenComponent } from './otp-screen/otp-screen.component';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule, OtpScreenComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor (private router:Router,){}

phoneNumber:string=''
passPhoneNumberToChild:string='';
 
showOtp(){
console.log(this.phoneNumber)
if(this.phoneNumber==null || this.phoneNumber=='' || this.phoneNumber.length<10 ){
  alert("Please enter valid number");
  return
}
localStorage.setItem('userEnterNumber',this.phoneNumber);
this.passPhoneNumberToChild=this.phoneNumber;
this.router.navigate(['otp-screen'])
console.log(this.passPhoneNumberToChild)
  console.log("going to otp ")
}

goToHome(){
  this.router.navigate([''])
}


}
