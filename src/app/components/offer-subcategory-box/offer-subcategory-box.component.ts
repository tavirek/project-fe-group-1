import { Component, Input, OnInit } from '@angular/core';
import { CourseResponse } from 'src/app/models/course-response';
import { SubcategoryResponse } from '../../models/subcategory-response';
import { ApiService } from '../../services/api-service.service';
import {DataDownloadCoursesService} from "../../services/data-download-courses.service";
import {CourseEvent} from "../../models/courseID";

@Component({
  selector: 'app-offer-subcategory-box',
  templateUrl: './offer-subcategory-box.component.html',
  styleUrls: ['./offer-subcategory-box.component.css']
})
export class OfferSubcategoryBoxComponent implements OnInit {

  @Input() subcategory: SubcategoryResponse;

  // TODO add proper courses Type
  course: CourseResponse;
  courses: any[];
  idCourses: number[];

  constructor(private coursesService: ApiService, private dataService: DataDownloadCoursesService) { }

  ngOnInit(): void {
    this.getCoursesList();
    //TODO get courses list from back end

  }

  getCoursesList(){
    this.coursesService.getSubcategoryCourses(this.subcategory.id).subscribe(
      courses => { this.courses = courses;
        console.log('Courses',courses);
        this.dataService.appendAllCourses(courses);
      })
  }

   onCheckBoxClick(courseEvent: CourseEvent){
    this.dataService.handleCheckboxClick(courseEvent.courseID, courseEvent.clickValue);
   }
}
