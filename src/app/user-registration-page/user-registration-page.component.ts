import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-registration-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-registration-page.component.html',
  styleUrl: './user-registration-page.component.css'
})
export class UserRegistrationPageComponent {
  constructor() {
    console.log('User Registration Component Loaded');
  }

}
