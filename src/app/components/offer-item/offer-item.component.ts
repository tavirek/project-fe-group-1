import {Component, OnInit} from '@angular/core';
import { CoursesService } from 'src/app/services/courses-service.service';

interface OfferItem {
  link: string;
  title: string;
}

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.getCourses()
  }

  public OfferItems: OfferItem[] = [
    {link: '', title: 'IT'},
    {link: '', title: 'Sales'},
    {link: '', title: 'Marketing'},
    {link: '', title: 'Other'},
  ]

  getCourses() {
    this.coursesService.getCourses().subscribe(courses => {
      console.log(courses)
    });
  }
}
