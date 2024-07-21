import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { RadioInputComponent } from '../../atoms/radio-input/radio-input.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { SelectInputComponent } from '../../atoms/select-input/select-input.component';
import { AuthService } from '../../services/auth.service';
import { CreateUserDto } from '../../dto/auth.dto';
import { HeaderComponent } from '../../organisms/header/header.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectInputComponent, InputFieldComponent, HeaderComponent, RadioInputComponent, ButtonComponent],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  countries: string[] = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
    "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
    "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      instructor: [null, Validators.required]
    });
  }

  get emailControl(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  get phoneNumberControl(): FormControl {
    return this.signupForm.get('phoneNumber') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  get countryControl(): FormControl {
    return this.signupForm.get('country') as FormControl;
  }

  get instructorControl(): FormControl {
    return this.signupForm.get('instructor') as FormControl;
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const { email, password, phoneNumber, country, instructor } = this.signupForm.value;
      const createUserDto: CreateUserDto = {
        email,
        password,
        phoneNumber,
        country,
        instructor
      };
      this.authService.register(createUserDto).subscribe({
        next: (res) => {
          console.log("Register Successful:", res);
          const successMessage = res?.data?.register?.message || 'Registration successful! and you can now log in';
          this.toastr.success(successMessage, 'Success');
        },
        error: (error) => {
          console.error("Registration error", error);
          const errorMessage = this.extractErrorMessage(error);
          this.toastr.error(errorMessage, 'Error');
        }
      });
    } else {
      this.signupForm.markAllAsTouched();
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
