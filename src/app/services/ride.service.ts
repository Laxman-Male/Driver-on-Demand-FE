import { Injectable } from '@angular/core';
import { PendingRide, upComingRide } from '../model/ride';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private http:HttpClient) { }

   currentRide!: upComingRide | null; 
   mobileNumber!: string
   otpValidate!:number
   private acceptedRide: PendingRide | null = null;

  setCurrentRide(ride: upComingRide){
    this.currentRide = ride;
  }

  setCurrentRideFromUpC(ride: PendingRide) {
    this.acceptedRide = ride;
  }

  getCurrentRideInCurrentRide(): PendingRide | null {
    return this.acceptedRide;
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

 

  LoginTheUser(body:any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post('http://localhost:8000/login', body, { headers });
  }

 GetDistanceCalculated(distance: number): Observable<any> {
    
     
    let queryParams = new HttpParams().set('distance', distance.toString());
    
    // 3. Send the GET request with the params
    return this.http.get('http://localhost:8000/get-rate', { params: queryParams });
  }

   
  BookRide(phoneNumber: string, bookingDetails: any): Observable<any> {
    const url = `http://localhost:8000/book-ride/${phoneNumber}`;
    // For a POST request, the second argument is the body (your object)
    return this.http.post(url, bookingDetails);
  }
 
  GetPendingRides(): Observable<any> {
    return this.http.get('http://localhost:8000/get-pending-rides');
  }


acceptRideApi(bookingId: number): Observable<any> {
  return this.http.get(`http://localhost:8000/accept-ride?id=${bookingId}`);
}

getCompletedRides(mobile: string): Observable<PendingRide[]> {
  // Pass the mobile as a query parameter
  return this.http.get<PendingRide[]>(`http://localhost:8000/get-completed-rides?mobile=${mobile}`);
}


completeRideApi(bookingId: number): Observable<any> {
  return this.http.get(`http://localhost:8000/complete-ride?id=${bookingId}`);
}


}


