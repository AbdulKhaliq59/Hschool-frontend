import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.css'
})
export class RadioInputComponent implements OnInit {
  @Input() label!: string;
  @Input() control !: FormControl;

  ngOnInit(): void {
    if (!this.control) {
      throw new Error('FormControl is required')
    }
  }
}
