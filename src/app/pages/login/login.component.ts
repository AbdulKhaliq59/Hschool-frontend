import { Component } from '@angular/core';
import { LoginFormComponent } from '../../molecules/login-form/login-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
