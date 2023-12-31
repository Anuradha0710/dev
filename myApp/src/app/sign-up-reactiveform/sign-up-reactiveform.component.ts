import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactiveform',
  templateUrl: './sign-up-reactiveform.component.html',
  styleUrls: ['./sign-up-reactiveform.component.css']
})
export class SignUpReactiveformComponent {

  singUpForm! : FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){

    this.formLoad()
  }

  formLoad(){
    this.singUpForm = this.formBuilder.group({
      name:['',[Validators.required]],
      mobile:[''],
    })
  }  
}
