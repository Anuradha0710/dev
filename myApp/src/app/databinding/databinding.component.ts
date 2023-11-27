import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
//DB : communication between a component and the DOM.
//1.One way databinding: is a simple one way communication where HTML template is changed when we make changes in TypeScript code.
//A : String interpolation {{}} 
//String Interpolation is a one-way databinding technique which is used to display data from ts to view(template)using curly braces
//B : Property Binding []
//C : Event Binding ()
//2.Two-way databinding [()] 




data : any = "We are learning string interpolation"            // String interpolation
amount : number = 900000;
schoolName! : string;
isMatch=true;
x=7

name ="Anuradha..."                                             //Property Binding    



  //    = : assignment operator: to asing value to the var/property
  //   == : eqality operator : it compare value only
  //  === : it compare value as well as data type  


    test(){
      return 50*2;
    }
}
