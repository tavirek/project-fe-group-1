import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CourseResponse } from 'src/app/models/course-response';
import {CourseEvent} from "../../models/courseId";

@Component({
  selector: 'app-offer-details-content-box',
  templateUrl: './offer-details-content-box.component.html',
  styleUrls: ['./offer-details-content-box.component.css']
})


export class OfferDetailsContentBoxComponent implements OnInit {

  @Input() course: CourseResponse;

  @Output() checkBoxClick = new EventEmitter<CourseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

 onCheckBoxClick (event) {
    console.log('event', event);
   this.checkBoxClick.emit({courseID: this.course.id, clickValue: false});
 }
}

