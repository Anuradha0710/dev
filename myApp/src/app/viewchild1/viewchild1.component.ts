import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Viewchild2Component } from '../viewchild2/viewchild2.component';

@Component({
  selector: 'app-viewchild1',
  templateUrl: './viewchild1.component.html',
  styleUrls: ['./viewchild1.component.css']
})
export class Viewchild1Component {



  @ViewChild ('city') cityName! : ElementRef
  @ViewChild(Viewchild2Component) viewCompo! : Viewchild2Component
  constructor(private cdr:ChangeDetectorRef) { }

  ngAfterViewInit(){
    
    console.log(this.cityName.nativeElement.innerHTML);
    this.cityName.nativeElement.innerHTML ='Pune'
    console.log(this.cityName.nativeElement.innerHTML);
    //console.log("name",this.viewCompo.name);
    this.viewCompo.name ="Anu"
    this.cdr.detectChanges();
  }
}
