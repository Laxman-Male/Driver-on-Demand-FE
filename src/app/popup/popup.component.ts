import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-popup',
  imports: [CommonModule, FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
@Output() close=  new EventEmitter<void>();
@Output() sendValue= new EventEmitter<{carName:string, carNumber:string}>();

carName:string=''
carNumber:string='';

closePopup(){
  this.close.emit()
}
 submitDetails(form: NgForm) {
    if (form.valid) {
      this.sendValue.emit({ carName: this.carName, carNumber: this.carNumber });
      this.close.emit()
      // form is valid → parent can hide popup
    } else {
      // Mark all fields as touched to show validation messages
      form.control.markAllAsTouched();
    }
  }
}
