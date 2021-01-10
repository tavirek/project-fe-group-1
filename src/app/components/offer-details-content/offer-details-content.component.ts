import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../../services/courses-service.service";
import { switchMap } from 'rxjs/operators';

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
    this.route.queryParams.pipe(
     switchMap(params => this.courses.getCourseDetails(params['title']))
    ).subscribe(
      data => this.courseDetails = data
    );
  }
}
