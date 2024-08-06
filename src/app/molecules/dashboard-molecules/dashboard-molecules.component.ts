import { Component, OnInit } from '@angular/core';
import { CourseFormComponent } from '../course-form/course-form.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../dto/course.dto';

@Component({
  selector: 'app-dashboard-molecules',
  standalone: true,
  imports: [CourseItemComponent, CourseFormComponent, CommonModule],
  templateUrl: './dashboard-molecules.component.html',
  styleUrl: './dashboard-molecules.component.css'
})
export class DashboardMoleculesComponent implements OnInit {
  courses: Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getUserCourses().subscribe({
      next: (result: any) => {
        this.courses = result?.data?.getUserCourses?.map((course: any) => ({
          courseName: course.name,
          progress: course.progress.length > 0 ? course.progress[0].percentage_complete : 0,
          lessonNumber: course.lessons_count
        })) || []
      },
      error: (err) => {
        console.error('Error fetching courses', err);
      }
    })
  }
}
