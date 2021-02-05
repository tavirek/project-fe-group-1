import { Component, EventEmitter, OnInit } from '@angular/core';
import {DataDownloadCoursesService} from './../../services/data-download-courses.service';

@Component({
  selector: 'app-summary-mail',
  templateUrl: './summary-mail.component.html',
  styleUrls: ['./summary-mail.component.css']
})
export class SummaryMailComponent implements OnInit {

  constructor(private data: DataDownloadCoursesService) { }

  email: string;

  ngOnInit(): void {
    this.email = this.data.mail;
  }


}
