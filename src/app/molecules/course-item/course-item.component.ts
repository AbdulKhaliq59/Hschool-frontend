import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {
  @Input() courseName!: string;
  @Input() progress!: number;
  @Input() lessonNumber !: number;

}
