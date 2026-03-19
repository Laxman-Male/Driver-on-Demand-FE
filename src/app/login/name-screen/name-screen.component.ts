import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RideService } from '../../services/ride.service';

@Component({
  selector: 'app-name-screen',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-screen.component.html',
  styleUrls: ['./name-screen.component.css']
})


export class NameScreenComponent {
  constructor (private router:Router, private riderService:RideService) { }
isIndividualActive:boolean= false;
isOrgActive:boolean= false;
userName:string=''
userEnteredNumber:string=''

 isAgreed: boolean = false;   
  showError: boolean = false; 


ngOnInit(){
  let a= localStorage.getItem('userEnterNumber') || ''
  this.userEnteredNumber= a;
}


indiActive(){
  this.isIndividualActive= !this.isIndividualActive
  this.isOrgActive=false
}

orgActive(){
  this.isOrgActive=!this.isOrgActive
  this.isIndividualActive=false
}

userVerified() {
  if (!this.userName) {
    alert('Please enter your name');
    return;
  }

  // Check checkbox
  if (!this.isAgreed) {
    this.showError = true;  
    return;
  }

  this.showError = false;

  const mob = localStorage.getItem('userPhoneNumber') || '';

  if (mob) {
    // Save local data
    localStorage.setItem('isOrg', this.isOrgActive.toString());
    localStorage.setItem('userName', this.userName);

    // Prepare JSON body
    const body = {
      name: this.userName,
      phoneNumber: mob
    };

    // Call API
    this.riderService.LoginTheUser(body).subscribe(
      (res: any) => {
        console.log('Register response:', res);
        localStorage.setItem("role",res.role)
        
        this.router.navigate(['']); // navigate after success
      },
      (err: any) => {
        console.error('Error registering user:', err);
        alert('Failed to register user');
      }
    );
  }

  console.log('User registration attempted');
}






















//   const Btn = document.getElementById("userVerified");
// const agreeTerms = document.getElementById("agreeTerms");
// const nameInput = document.getElementById("name");
// const individualBtn = document.getElementById("individualBtn");
// const organizationBtn = document.getElementById("organizationBtn");

// Btn.addEventListener("click", () => {
//    if(nameInput.value === "" && !agreeTerms.checked){
//         alert("You have to enter name and agree terms and condition!");
//     }
//     else if(nameInput.value === ""){
//         alert("You have to enter name!");
//     }
//     else if(!agreeTerms.checked){
//         alert("You have to agree terms and condition!");
//     }
//     else{
//         alert("done");
//     }
// });

// individualBtn.addEventListener("click", () => {
//    alert("You selected Individual");
// });

// organizationBtn.addEventListener("click", () => {
//    alert("You selected Organization");
// });


}
