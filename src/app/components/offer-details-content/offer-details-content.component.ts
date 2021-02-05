import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api-service.service";
import {switchMap} from 'rxjs/operators';
import {SubcategoryResponse} from "../../models/subcategory-response";
import {DataDownloadCoursesService} from "../../services/data-download-courses.service";
import { CourseResponse } from 'src/app/models/course-response';

@Component({
  selector: 'app-offer-details-content',
  templateUrl: './offer-details-content.component.html',
  styleUrls: ['./offer-details-content.component.css']
})
export class OfferDetailsContentComponent implements OnInit, OnDestroy {

  @Input() subcategories: SubcategoryResponse[];

  categoryDetails: any;

  constructor(private route: ActivatedRoute, private categoryService: ApiService, private dataService: DataDownloadCoursesService) {
  }

  ngOnInit(): void {
    this.getCategoryName()
    this.getSubcategory()
    
  };

  private getSubcategory() {
    this.route.queryParams.pipe(
      switchMap(params => this.categoryService.getSubcategories(params['id']))
    ).subscribe(data => {
      this.subcategories = data;
      console.log(data);
    })
  };

  getCategoryName() {
    this.route.queryParams.pipe(
      switchMap(params => this.categoryService.getCategoryDetails(params['id']))
    ).subscribe(
      data => {
        this.categoryDetails = data;
        console.log(data)
      }
    );


  }

  ngOnDestroy(): void {
  }
}
