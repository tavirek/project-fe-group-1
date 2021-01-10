import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../services/courses-service.service";

@Component({
  selector: 'app-offer-details-content',
  templateUrl: './offer-details-content.component.html',
  styleUrls: ['./offer-details-content.component.css']
})
export class OfferDetailsContentComponent implements OnInit {

  courseDetails: any;

  constructor(private route: ActivatedRoute, private courses: CoursesService) {
  }

  ngOnInit(): void {
    this.getCoursesTitle()
  };

  getCoursesTitle() {
    this.route.queryParams.subscribe(params => {
      this.courses.getCourseDetails(params['title']).subscribe(details => this.courseDetails = details);
    });
  }
}
