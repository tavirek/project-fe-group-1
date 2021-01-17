import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../services/courses-service.service";
import {switchMap} from 'rxjs/operators';
import {CategoryResponse} from "../../models/category-response";
import {SubcategoryResponse} from "../../models/subcategory-response";

@Component({
  selector: 'app-offer-details-content',
  templateUrl: './offer-details-content.component.html',
  styleUrls: ['./offer-details-content.component.css']
})
export class OfferDetailsContentComponent implements OnInit {

  @Input() subcategories: SubcategoryResponse[];

  categoryDetails: any;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategoryName()
    this.getSubcategory()
  };

  private getSubcategory() {
    this.route.queryParams.pipe(
      switchMap(params => this.categoryService.getSubcategories(params['id']))
    ).subscribe(data => this.subcategories = data)
  };

  getCategoryName() {
    this.route.queryParams.pipe(
      switchMap(params => this.categoryService.getCategoryDetails(params['id']))
    ).subscribe(
      data => {this.categoryDetails = data;
        console.log(data)}
    );
  }
}
