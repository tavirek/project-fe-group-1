import { ThrowStmt } from '@angular/compiler';
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

  isChecked: boolean;

  @Input() course: CourseResponse;

  @Output() checkBoxClick = new EventEmitter<CourseEvent>();

  constructor() {
  }

  ngOnInit(): void {
  }

 onCheckBoxClick () {
    this.isChecked = !this.isChecked;
    console.log(this.course.id, this.isChecked);
    this.checkBoxClick.emit({courseID: this.course.id, clickValue: this.isChecked});
 }
}

