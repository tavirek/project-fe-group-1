import {Component, OnInit} from '@angular/core';
import {CoursesService} from 'src/app/services/courses-service.service';
import {CourseResponse} from "../../models/course-response";

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {

  courses: CourseResponse[];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.getCourses()
  }

  getCourses() {
    this.coursesService.getCourses().subscribe(data => {
      this.courses = data;
      console.log(data)
    });
  }
}
