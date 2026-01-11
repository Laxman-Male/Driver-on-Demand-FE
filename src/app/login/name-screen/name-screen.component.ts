import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-screen',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-screen.component.html',
  styleUrls: ['./name-screen.component.css']
})


export class NameScreenComponent {
  constructor (private router:Router) { }
isIndividualActive:boolean= false;
isOrgActive:boolean= false;
userName:string=''
userEnteredNumber:string=''


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

userVerified(){
  if(this.userName == ''){
    alert('Please enter name')
  } else{
    if(localStorage.getItem('userEnterNumber')){
      localStorage.setItem("isOrg",this.isOrgActive.toString());
      localStorage.setItem("userName",this.userName)
      this.router.navigate(['']);
    }
  }
  console.log("user registered")
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
