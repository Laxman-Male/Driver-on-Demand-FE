import { Injectable } from '@angular/core';
import { upComingRide } from '../model/ride';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor() { }

   currentRide!: upComingRide | null; 
   mobileNumber!: string
   otpValidate!:number

  setCurrentRide(ride: upComingRide){
    this.currentRide = ride;
  }

  getCurrentRide(){
    return this.currentRide;
  }

  clearCurrentRide(){
  this.currentRide = null;
}

 setNumberForOtp(n:string){
  this.mobileNumber=n
 }
 getNumberForOtp(){
  return this.mobileNumber
 }

 storeOTP(n:number){
  this.otpValidate=n
 }

 validateOTP(){
  return this.otpValidate
 }

}
