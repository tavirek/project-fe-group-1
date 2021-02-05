import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {CourseResponse} from '../models/course-response'; 

@Injectable({
  providedIn: 'root'
})
export class DataDownloadCoursesService {

  constructor(private router: Router) {
  }

  private _selectedCoursesID: number[] = [];
  private _allCourses: CourseResponse[];
  private _mail: string;

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  set allCourses(courses: CourseResponse[]){
    this._allCourses = courses;
  }

  get allCourses(){
    return this._allCourses;
  }

  appendAllCourses(courses: CourseResponse[]){
    const allCourses = new Set(this._allCourses);
    courses.forEach(course => allCourses.add(course));

    this._allCourses = Array.from(allCourses);
  }

  get selectedCoursesID(): number[] {
    return this._selectedCoursesID;
  }

  set selectedCoursesID(value: number[]) {
    this._selectedCoursesID = value;
  }

  clearCoursesAfterSubmit(): void {
    this._selectedCoursesID = [];
  }

  handleCheckboxClick(id: number, value: boolean): void {
    value === true ? this._selectedCoursesID.push(id) : this._selectedCoursesID = this._selectedCoursesID.filter(x => x !== id);
    console.log(this._selectedCoursesID);}

  goToSummary(){
    this.router.navigate(['summary']);

  }
}
