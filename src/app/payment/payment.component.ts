import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { CommonModule } from '@angular/common';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  bookingId!: number;
  amount: number = 0;
  upiId: string = 'yourname@okaxis'; // Your test UPI ID
  qrCodeUrl: string = '';
  isProcessing: boolean = false;
  paymentSuccess: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private rideService: RideService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get ID from URL (/payment/5)
    this.bookingId = Number(this.route.snapshot.paramMap.get('id'));

    // 1. Fetch fare details from Go Backend
    this.rideService.getPaymentInfo(this.bookingId).subscribe({
      next: (res:any) => {
        this.amount = res.amount;
        
        this.generateQrCode();
      },
      error: (err:any) => console.error("Error fetching payment info:", err)
    });
  }

  generateQrCode() {
    // Standard UPI string format for apps like GPay/PhonePe
    const upiString = `upi://pay?pa=${this.upiId}&am=${this.amount}&tn=Ride_${this.bookingId}&cu=INR`;
    
    // Using free QR Server API
    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiString)}`;
  }

  confirmPayment() {
  this.isProcessing = true;

  const payload = {
    bookingId: this.bookingId,
    amount: this.amount,
    method: 'UPI'
  };

  // Simulate verification delay for cinematic feel
  setTimeout(() => {
    // Step 1: Process the payment record
    this.rideService.processPayment(payload).subscribe({
      next: (res: any) => {
        console.log("Step 1: Payment recorded in DB", res);

        // Step 2: Now call the complete-ride API to update status in RideBookingstbl
        this.rideService.completeRideApi(this.bookingId).subscribe({
          next: (completeRes: any) => {
            console.log("Step 2: Ride status updated to Completed", completeRes);
            
            // Both are successful, show success UI
            this.paymentSuccess = true;
            this.isProcessing = false;
          },
          error: (err: any) => {
            this.isProcessing = false;
            console.error("Ride completion failed after payment:", err);
            alert("Payment recorded, but failed to update ride status. Contact support.");
          }
        });
      },
      error: (err: any) => {
        this.isProcessing = false;
        console.error("Payment recording failed:", err);
        alert("Could not verify payment. Please try again.");
      }
    });
  }, 2500);
}

  finish() {
    this.router.navigate(['/driver-activity']);
  }
}