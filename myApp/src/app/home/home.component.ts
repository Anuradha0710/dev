import { Component } from '@angular/core';
import { Router } from '@angular/router';        //import section
import { DataService } from '../data.service';

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
  name : string ="Anuradha yadav"
  name2? : string;                                   //?/!
  name3 : any

  pipe:boolean=false;
  date = new Date()
  constructor(private router: Router, private dataService:DataService){}  //constructor section

  ngOnInit(){
    this.dataService.userName = this.name;
    console.log("set",this.dataService.userName);
    
  }


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

  purePipes(){
    this.pipe=true;
  }
}
