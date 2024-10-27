import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { UserRegistrationPageComponent } from './user-registration-page/user-registration-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"Register",component:UserRegistrationPageComponent},
  {path:"Login",component:UserLoginPageComponent}
 
];
