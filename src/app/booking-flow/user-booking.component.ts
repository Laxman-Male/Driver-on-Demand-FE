import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import { RideService } from '../services/ride.service';
import { Router } from '@angular/router';
// import { EnvironmentComponent } from '../environment/environment.component';
// import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user-booking',
  imports: [CommonModule, FormsModule, PopupComponent],
  templateUrl: './user-booking.component.html',
  styleUrl: './user-booking.component.css'
})
export class UserBookingComponent {
constructor(private rideService:RideService, private router:Router){}

  selectedService: string = '';
  pickupLocation: string = '';
  dropLocation: string = '';
  rideDate!: string;
  numberOfDays!: number;
  hasCar!: boolean | null;
  showPopUp:boolean=false;
  startTime?:string;
  noOfWeek?:number;
  address?:string;
  startDate= new Date()
  noOfHours?:number;
  noOfDays?:number;
  endDate= new Date();
  
  carName: string = '';
  carNumber: string = '';
  userLat!: number;   // latitude
userLng!: number;

dropLat!: number;
  dropLng!: number;

  distanceText: string = '';
  durationText: string = '';
  distanceInKm: number = 0;

  totalFare: number = 0;


  weekBasis:any={}
  oneWay:any={}
  RoundTrip:any={}
  OutStation:any={}
  TemporaryDriver:any={}
  finalForm:any={}
  

  bookRide() {
    if(this.selectedService=="Hourly Driver"){

      let   hourlyForm ={
        pickupLocation: this.pickupLocation,
        dropLocation: this.dropLocation,
        startTime: this.startTime,
        Date: this.startDate,
        noOfHours:this.noOfHours
      }
      this.finalForm=hourlyForm;
} else if(this.selectedService=="Weekly Driver" || this.selectedService == "Monthly Driver"){
  let weeklyForm = {
    address: this.address,
    startDate:this.startDate,
    endDate: this.endDate,
    time:this.startTime
  }
  this.finalForm=weeklyForm
} else if(this.selectedService=='One Way' || this.selectedService=="Round Trip"){
  let oneWayForm = {
    pickupLocation:this.pickupLocation,
    dropLocation:this.dropLocation,
    startDate:this.startDate,
    noOfHours:this.noOfHours,
    startTime:this.startTime
  }
  this.finalForm=oneWayForm
} else if(this.selectedService=="Outstation Driver"){
  let OutStation = {
      pickupLocation:this.pickupLocation,
    dropLocation:this.dropLocation,
    startDate:this.startDate,
    startTime:this.startTime,
    noOfDays:this.noOfDays
  }
  this.finalForm=OutStation;
}

    console.log({
      service: this.selectedService,
      pickup: this.pickupLocation,
      drop: this.dropLocation,
      date: this.rideDate,
      days: this.numberOfDays,
      hasCar: this.hasCar
    });
    // alert('Ride booked! Check console for data.');
    console.log(this.selectedService)
     
    console.log(this.finalForm)

    this.finalForm.serviceType = this.selectedService;
    this.finalForm.totalFare = this.totalFare;
    this.finalForm.distance = this.distanceInKm;
    this.finalForm.hasCar = this.hasCar;
    this.finalForm.customerName = localStorage.getItem("userName");
    
    // If they have their own car, send those details too
    if (this.hasCar) {
      this.finalForm.carName = this.carName;
      this.finalForm.carNumber = this.carNumber;
    }

    // 3. Get the phone number from local storage
    const userPhone = localStorage.getItem('userPhoneNumber');
      if (!userPhone) {
      alert("Please log in first.");
      return;
    }

    if (!userPhone) {
      alert("Please log in first. Phone number is missing.");
      return;
    }

    console.log("Sending booking payload:", this.finalForm);

    // 4. Call the API
    this.rideService.BookRide(userPhone, this.finalForm).subscribe({
      next: (response: any) => {
        console.log("Booking successful!", response);
        alert("Ride booked successfully!");
        
      },
      error: (err) => {
        console.error("Error booking ride:", err);
        alert("Failed to book the ride. Check console for details.");
      }
    });

    setTimeout(() => {
      this.router.navigate(['/user-bookings/exist'])
    }, 5000);

  }

onCarChange(){
  if(this.hasCar){
    this.showPopUp=true
  }else{
    this.showPopUp=false
  }
}

editRadio(){
  this.showPopUp=false;
  if(this.carName!="" && this.carNumber !=""){
    this.hasCar=true
  } else{
    this.hasCar=null
  }
}


  receiveCarDetails(data: { carName: string; carNumber: string }) {
    this.carName = data.carName;
    this.carNumber = data.carNumber;

    console.log('Car Name:', this.carName);
    console.log('Car Number:', this.carNumber);
    
    this.hasCar=true
  }

<<<<<<< HEAD
 

=======
<<<<<<< HEAD

=======
 
>>>>>>> fixes/homepage
  
>>>>>>> 427089e5026df7f00aa8460b4727b8e9e68145c1
  getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.userLat = position.coords.latitude;
        this.userLng = position.coords.longitude;
        console.log('User location:', this.userLat, this.userLng);


        // Automatically fill the input 
        this.reverseGeocode(this.userLat, this.userLng);

      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Please allow location access to continue');
      }
    );
  } else {
    alert('Geolocation is not supported by your browser');
  }
}

 reverseGeocode(lat: number, lng: number) {
  console.log("Fetching address from Nominatim...");
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

  // if the API fails
  fetch(url, {
    headers: {
      'Accept-Language': 'en' 
    }
  })
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      if (data && data.display_name) {
        this.pickupLocation = data.display_name;
        console.log('Pickup location found:', this.pickupLocation);
      }
    })
    .catch(err => {
      console.error('Fetch error:', err);
       
      this.pickupLocation = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    });
}

getDropCoordinates() {
    if (!this.dropLocation) {
      alert('Please enter a drop location first.');
      return;
    }

    console.log("Looking up drop coordinates for:", this.dropLocation);
    
     const encodedAddress = encodeURIComponent(this.dropLocation);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&limit=1`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
           this.dropLat = parseFloat(data[0].lat);
          this.dropLng = parseFloat(data[0].lon);
          
          console.log(`✅ Drop coordinates found: Lat ${this.dropLat}, Lng ${this.dropLng}`);
          
          // call the distance calculator 
          this.calculateRoute();
          
        } else {
          alert('Could not find that location. Please try adding a city name (e.g., "Shivaji Nagar, Pune").');
        }
      })
      .catch(err => console.error('Geocoding error:', err));
  }


calculateRoute() {
if (!this.userLat || !this.userLng || !this.dropLat || !this.dropLng) {
console.error("Missing coordinates for routing.");
return;
}

console.log("Calculating route with OSRM...");

// Format for OSRM: longitude,latitude;longitude,latitude
const coordinates = `${this.userLng},${this.userLat};${this.dropLng},${this.dropLat}`;
const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=false`;

fetch(osrmUrl)
  .then(res => res.json())
  .then(data => {
    if (data.code === 'Ok') {
      // OSRM returns distance in meters and duration in seconds
      const distanceInMeters = data.routes[0].distance;
      const durationInSeconds = data.routes[0].duration;

      // Convert to Kilometers and Minutes
      this.distanceInKm = parseFloat((distanceInMeters / 1000).toFixed(2));
      const durationInMins = Math.round(durationInSeconds / 60);

      this.distanceText = `${this.distanceInKm} km`;
      this.durationText = `${durationInMins} mins`;

      console.log(`🚗 Route Found: ${this.distanceText}`);
      console.log(`⏱️ Est. Time: ${this.durationText}`);

      //calling   api  
      this.fetchRateAndCalculateTotal(this.distanceInKm);
      
    } else {
      alert('Could not calculate a driving route between these locations.');
    }
  })
  .catch(err => console.error('Routing error:', err));

}


fetchRateAndCalculateTotal(distance: number) {
    this.rideService.GetDistanceCalculated(distance).subscribe({
      next: (response: any) => {
        console.log("Backend Response:", response);
        
        const ratePerKm = response.ratePerKM; 
        
        // Calculate the final price
        this.totalFare = distance * ratePerKm;
        
        console.log(`💰 Rate per KM: ₹${ratePerKm}`);
        console.log(`🧾 Total Estimated Fare: ₹${this.totalFare.toFixed(2)}`);
      },
      error: (err) => {
        console.error('Error fetching rate from backend:', err);
        alert('Could not calculate the final fare');
      }
    });
  }

 
}
