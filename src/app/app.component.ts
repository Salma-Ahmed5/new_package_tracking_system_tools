import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRegistrationPageComponent } from './user-registration-page/user-registration-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserRegistrationPageComponent,UserLoginPageComponent,HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
