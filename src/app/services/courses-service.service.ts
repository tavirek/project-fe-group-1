import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, of } from "rxjs";
import {CourseResponse} from "../models/course-response";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080/course';

  getCourses(): Observable<CourseResponse[]> {
    return this.http.get<CourseResponse[]>(this.baseUrl);
  }

  getCourseDetails(courseTitle: string): Observable<any> {
    return of({title: courseTitle});
  }
}
