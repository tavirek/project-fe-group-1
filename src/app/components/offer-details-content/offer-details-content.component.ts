import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseResponse} from "../../models/course-response";
import {CoursesService} from "../../services/courses-service.service";

@Component({
  selector: 'app-offer-details-content',
  templateUrl: './offer-details-content.component.html',
  styleUrls: ['./offer-details-content.component.css']
})
export class OfferDetailsContentComponent implements OnInit {

  courses: CourseResponse[];

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCoursesTitle()
  };

  getCoursesTitle() {
    this.coursesService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
}
