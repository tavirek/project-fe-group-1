import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoryResponse} from "../models/category-response";
import {SubcategoryResponse} from "../models/subcategory-response";
import {CourseResponse} from "../models/course-response";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080';

  getCategories(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(`${this.baseUrl}/category`);
  }

  getSubcategories(categoryID: number): Observable<SubcategoryResponse[]> {
    return this.http.get<SubcategoryResponse[]>(`${this.baseUrl}/subcategory/bycategory/${categoryID}`);
  }

  getCategoryDetails(id: number): Observable<any> {
    return of({id: id});
  }

  getSubcategoryCourses(subcategoryID: number): Observable<CourseResponse[]> {
    return this.http.get<CourseResponse[]>(`${this.baseUrl}/course/bysubcategory/${subcategoryID}`);
  }

  getCourseDetails(title: string): Observable<any> {
    return of({title: title});
  }

}
