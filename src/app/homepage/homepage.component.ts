import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
   standalone: true,          // ← You must add this
  imports: [CommonModule], 
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
constructor (private router:Router){}

isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  console.log(this.isMenuOpen)
}


 menuClick(message:any) {
    alert(message);
}

 buttonAction(msg:any) {
    alert(msg);
}
//  renderService(type){
// 	// window.location.href = ${indexedDB.html}.html;
// 	//alert("Opening Services: " +type);
// }
goToProfileSection(){
  console.log("hello")
    this.router.navigate(['/profile']);

}
}
