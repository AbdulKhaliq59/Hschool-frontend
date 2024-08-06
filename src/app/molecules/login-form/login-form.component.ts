import { Component, OnInit } from '@angular/core';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { LoginDto } from '../../dto/auth.dto';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [InputFieldComponent, ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginDto: LoginDto = this.loginForm.value;
      this.authService.login(loginDto).subscribe({
        next: (response) => {
          const token = response?.data?.login?.access_token;
          if (token) {
            localStorage.setItem('authToken', token);
            this.router.navigate(['/dashboard']);
          } else {
            this.toastr.error('Login failed', 'Error')
          }
        },
        error: (err) => {
          const errorMessage = this.extractErrorMessage(err);
          this.toastr.error(errorMessage, 'Error')
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  private extractErrorMessage(error: any): string {

    if (error?.errors && Array.isArray(error.errors) && error.errors.length > 0) {
      const firstError = error.errors[0];
      if (firstError.message) {
        return firstError.message;
      }
      return 'An unknown error occurred';
    }
    if (error?.message) {
      return error.message;
    }

    return 'An unknown error occurred';
  }

}
