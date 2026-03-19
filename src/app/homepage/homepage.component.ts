import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
   standalone: true,          // ← You must add this
  imports: [CommonModule,FormsModule, CommonModule], 
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
constructor (private router:Router){}

userType:string=""
showDoubtPopUp:boolean=false;
showRequestPopUp:boolean=false;
NameforDoubt:string=''
numberForDoubt:string=''
textForDoubt:string=''

ngOnInit(){
  console.log("fist")

  let loggedInNum=localStorage.getItem('userPhoneNumber');
  let loggedInName=localStorage.getItem('userName');
  let userTy= localStorage.getItem("role")
  this.userType=String(userTy);

  console.log(loggedInName, loggedInNum)
  setTimeout(()=>{
    if(loggedInName && loggedInNum){
      // this.router.navigate([''])
    } else{
    alert('please log in to website')
    this.router.navigate(['/login'])
  }
  },5000)



}

isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  console.log(this.isMenuOpen)
}


 menuClick(message:any) {
    alert(message);
    console.log("message",message)
    console.log(message)
}

 buttonAction() {
    this.showDoubtPopUp=true;
    document.body.style.overflow = 'hidden';
    
}
//  renderService(type){
// 	// window.location.href = ${indexedDB.html}.html;
// 	//alert("Opening Services: " +type);
// }
goToProfileSection(){
  console.log("hello")
    this.router.navigate(['/profile']);

}
gotoDriverDashBoard(){
  this.router.navigate(['/driver-dashboard'])
}

goToBookingFlow(){
  this.router.navigate(['/booking-flow']);
}
gotoYourBookings(){
  this.router.navigate(['user-bookings/exist']);
}

gotoHome(){
  this.router.navigate([''])
  this.showDoubtPopUp=false
  this.showRequestPopUp=false;

}
closeDoubtPopUp(){
  this.showDoubtPopUp=false
  alert(
   "Thank you! " + this.NameforDoubt + " Will get back to you!"
  )
}

closeRequestPopUp(){
  this.showRequestPopUp=false
  alert(
   "Thank you! " + this.NameforDoubt + " Will get back to you!"
  )
}

RequestToBecomeDriver(){
this.showRequestPopUp=true;
}

}


// NameforDoubt:string=''
// numberForDoubt:string=''
// textForDoubt:string=''