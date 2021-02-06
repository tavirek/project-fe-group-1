import { Component, OnInit, Output } from '@angular/core';
import { CourseResponse } from 'src/app/models/course-response';
import { DataDownloadCoursesService } from 'src/app/services/data-download-courses.service';

@Component({
  selector: 'app-summary-site',
  templateUrl: './summary-site.component.html',
  styleUrls: ['./summary-site.component.css']
})
export class SummarySiteComponent implements OnInit {

  checkedCourses: CourseResponse[];

  constructor(private dataService: DataDownloadCoursesService) { }

  ngOnInit(): void {
    this.checkedCourses = this.getCheckedCourses();
  }

  getCheckedCourses(){
    const checkedIds = this.dataService.selectedCoursesID;
    const allCourses = this.dataService.allCourses;
    const checkedCourses = checkedIds.map(id => allCourses.find(course => course.id === id));
    return checkedCourses;
  }


}
