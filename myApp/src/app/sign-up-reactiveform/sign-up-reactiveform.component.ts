import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactiveform',
  templateUrl: './sign-up-reactiveform.component.html',
  styleUrls: ['./sign-up-reactiveform.component.css']
})
export class SignUpReactiveformComponent {

  singUpForm! : FormGroup;
  show:boolean=false;
  showPassword:boolean=false;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){

    this.formLoad()
  }

  formLoad(){
    this.singUpForm = this.formBuilder.group({
      name:['',[Validators.required]],
      mobile:[,[Validators.maxLength(10)]],
      Pancard:['',[Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),Validators.maxLength(10)]],
      email:[''],
      pass:[''],
      confirmPass:[''],
      city:["",[this.spacesNotAllowed]]
    })
  } 
  
  spacesNotAllowed(inputVal:any){
    
    const value=inputVal.value;
    let isIncludeSpace = /\s{2,}/.test(value)
    return isIncludeSpace ? {spacesNotAllowed: true}:null;

    //value.toLowerCase().includes("clone") //to show error when clone word got entered

  }
  submit(){
    console.log(this.singUpForm.value);
    
  }
  toShowPassword(){
    // this.showPassword=true;
    // this.show=true;
    this.showPassword=!this.showPassword;
    this.show=! this.show;
  }
}
