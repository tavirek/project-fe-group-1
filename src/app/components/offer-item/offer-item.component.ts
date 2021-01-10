import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from 'src/app/services/courses-service.service';
import {CategoryResponse} from "../../models/course-response";

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {

  @Input() categories: CategoryResponse[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getCategories()
    this.getSubcategory()
  }

  private getSubcategory() {
    this.categoryService.getSubcategories().subscribe(data => {
      this.categories = data;
      console.log(data)
    })
  };

  private getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data)
    });
  }
}
