import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

 toggleMenu() {
    const menu = document.getElementById("navMenu");
    // menu.style.display = menu.style.display === "flex" ? "none" : "flex";
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
}
