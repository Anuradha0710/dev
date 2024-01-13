import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent {
  endPoint = 'admin';
  adminData:any;
  constructor(private dataService :DataService ){

  }
  //initially display of user names
  ngOnInit(){
    this.dataService.getApiCall(this.endPoint).subscribe(adminData=> {
      console.log(adminData);
      this.adminData = adminData;
    })
  }
}
