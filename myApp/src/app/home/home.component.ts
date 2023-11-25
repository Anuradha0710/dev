import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}
  signUpCompo(){
    console.log("signUpCompo fun calling");
    this.router.navigateByUrl("SingUp")
  }
}
