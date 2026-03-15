export interface upComingRide{
  rideType: string;
  name: string;
  pickup: string;
  drop: string;
  dateTime: string;
  car: string;
  duration: string;
  distance: string;
}

export interface PendingRide {
  bookingId: number;
  serviceType: string;
  status: string;
  
  // These fields can be null depending on the service selected
  pickupLocation: string | null;
  dropLocation: string | null;
  address: string | null;
  startDate: string | null;
  endDate: string | null;
  startTime: string | null;
  noOfDays: number | null;
  noOfHours: number | null;
  hasCar: boolean | null;
  carName: string | null;
  carNumber: string | null;
  totalFare: number | null;
  distance: number | null;
  customerName:number | null;
}