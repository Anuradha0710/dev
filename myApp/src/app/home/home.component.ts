import { Component } from '@angular/core';
import { Router } from '@angular/router';        //import section

@Component({       //component directive : meta data of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {         //component class : properties,constructor,lifecycle hooks,methods etc.
                    //property setion  
  //let/var/cont city = "pune" var in js


  city : string = "Satara";  //property
  surName : any = "234567788"
  name : string ="Anuradha"
  name2? : string;                                   //?/!
  name3 : any
  constructor(private router: Router){}  //constructor sction


  //LH,methods
  signUpCompo(){

    this.name3 = "Shree";
    console.log("city",this.city);
    console.log("signUpCompo fun calling");
    this.test();
    this.router.navigateByUrl("SingUp");
  }


  test(){
    console.log("test calling...");
    
  }

  directives(){
    this.router.navigateByUrl('directives')
  }
}
