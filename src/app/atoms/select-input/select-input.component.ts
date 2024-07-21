import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css'
})
export class SelectInputComponent implements OnInit {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() options: string[] = [];

  ngOnInit(): void {
    if (!this.control) {
      throw new Error("FormControl is required")
    }
  }
}
