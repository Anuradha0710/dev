import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component {
  data2:any;
  constructor(private dataService:DataService){}

    ngOnInit(){
      this.dataService.data.subscribe(res=>{
        this.data2=res;
      })
    }
}
