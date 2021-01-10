import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, of } from "rxjs";
import {CategoryResponse} from "../models/course-response";
import {SubcategoryResponse} from "../models/subcategory-response";

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

  getSubcategories(): Observable<SubcategoryResponse[]> {
    return this.http.get<SubcategoryResponse[]>(`${this.baseUrl}/subcategory`);
  }

  getCategoryDetails(name: string): Observable<any> {
    return of({name: name});
  }
}
