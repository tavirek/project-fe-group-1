import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from 'src/app/services/api-service.service';
import {CategoryResponse} from "../../models/category-response";

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {

  @Input() categories: CategoryResponse[];

  constructor(private categoryService: ApiService) {
  }

  ngOnInit() {
    this.getCategories()

  }



  private getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data)
    });
  }
}
