import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() control!: FormControl;

  ngOnInit(): void {
    if (!this.control) {
      throw new Error('FormControll is required')
    }
  }
}
