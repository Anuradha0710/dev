import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : "login" , component : LogInComponent},
  { path : "SingUp" , component : SignUpComponent},
  { path : "dataBinding" ,component : DatabindingComponent},
  { path : "directives" , component : DirectivesComponent},
  { path : "lifecycleHooks",component : LifecyclehooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
