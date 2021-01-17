import { Component, Input, OnInit } from '@angular/core';
import { SubcategoryResponse } from '../../models/subcategory-response';
import { CategoryService } from '../../services/courses-service.service';

@Component({
  selector: 'app-offer-subcategory-box',
  templateUrl: './offer-subcategory-box.component.html',
  styleUrls: ['./offer-subcategory-box.component.css']
})
export class OfferSubcategoryBoxComponent implements OnInit {

  @Input() subcategory: SubcategoryResponse;

  // TODO add proper courses Type
  courses: any[];

  constructor(private coursesService: CategoryService) { }

  ngOnInit(): void {
    //TODO get courses list from back end
    // this.coursesService.getCategoryDetails(this.subcategory.name)
  }

}
