import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { CreateCourseInput } from '../../dto/course.dto';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      progress: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      lessons_count: [null, Validators.required]
    });
  }

  get nameControl(): FormControl {
    return this.courseForm.get('name') as FormControl;
  }
  get authorControl(): FormControl {
    return this.courseForm.get('author') as FormControl;
  }
  get progressControl(): FormControl {
    return this.courseForm.get('progress') as FormControl;
  }
  get lessons_countControl(): FormControl {
    return this.courseForm.get('lessons_count') as FormControl;
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const { name, author, progress, lessons_count } = this.courseForm.value;
      const createCourseInput: CreateCourseInput = { name, author, lessons_count };
      this.courseService.createCourse(createCourseInput, progress).subscribe({
        next: () => {
          this.toastr.success('Course created successfully', 'Success');
          this.courseForm.reset();
        },
        error: (err) => {
          const errorMessage = this.extractErrorMessage(err);
          this.toastr.error(errorMessage, 'Error');
        }
      });
    } else {
      this.courseForm.markAllAsTouched();
    }
  }

  private extractErrorMessage(error: any): string {
    if (error?.errors && Array.isArray(error.errors) && error.errors.length > 0) {
      const firstError = error.errors[0];
      if (firstError.message) {
        return firstError.message;
      }
      return "An unknown error occurred";
    }
    if (error?.message) {
      return error.message;
    }
    return "An unknown error occurred";
  }
}
