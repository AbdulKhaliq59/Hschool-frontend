import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { CreateCourseInput } from "../dto/course.dto";

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private apollo: Apollo) { }

  getUserCourses(): Observable<any> {
    const GET_USER_COURSES_QUERY = gql`
      query {
        getUserCourses {
          id
          name
          author
          lessons_count
          progress {
            percentage_complete
            last_updated
          }
        }
      }
    `;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.apollo.query({
      query: GET_USER_COURSES_QUERY,
      context: {
        headers
      }
    });
  }

  createCourse(createCourseInput: CreateCourseInput, progress: number): Observable<any> {
    const CREATE_COURSE_MUTATION = gql`
      mutation CreateCourse($createCourseInput: CreateCourseInput!, $progress: Float!) {
        createCourse(createCourseInput: $createCourseInput, progress: $progress) {
          id
          name
          author
          lessons_count
          created_at
          updated_at
          progress {
            percentage_complete
          }
        }
      }
    `;
    const token = localStorage.getItem('authToken');
    return this.apollo.mutate({
      mutation: CREATE_COURSE_MUTATION,
      variables: {
        createCourseInput,
        progress,
      },
      context: {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      }
    });
  }
}
