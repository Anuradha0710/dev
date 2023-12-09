import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {

  name:any; //normal prop
  // @Input() surName :any; //input prop


  constructor(private dataService:DataService){
    console.log("constructor calling..");
    
  }
//A component instanc has a lifecycle that starts when Angular instantiates the component class and renders the component views and its child views.
//1.ngOnChanges()  if component is having @input bound prperties then ngOnChanges lc h get triiger first.
//2.ngOnInit()
//3.ngDoCheck()
//4.ngAfterContentInit()
//5.ngAfterContentChecked()
//6.ngAfterViewInit()
//7.ngAfterViewChecked()
//8.ngOnDestroy

ngOnChenges(){
  console.log("OnChenges calling..");
  
}
ngOnInit(){

  this.name = this.dataService.userName;
  console.log("Oninit calling..");
  
}
ngDoCheck(){
  console.log("Do Check Calling..");
  
}
ngAfterContentInit(){
  console.log("AfterContentInit calling..");
  
}
ngAfterContentChecked(){
  console.log("AfterContentChecked calling..");
  
}
ngAfterViewInit(){
  console.log("AfterViewInit calling..");
  
}
ngAfterViewChecked(){
  console.log("AfterViewChecked calling..");
  
}
ngOnDestroy(){
  console.log("OnDestroy calling");
  
}

}
