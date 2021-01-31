import { Component, OnInit } from '@angular/core';
import {SummaryService} from "../../services/summary.service";

@Component({
  selector: 'app-offer-item-footer',
  templateUrl: './offer-item-footer.component.html',
  styleUrls: ['./offer-item-footer.component.css']
})
export class OfferItemFooterComponent implements OnInit {



  constructor(private summary: SummaryService) { }

  ngOnInit(): void {

  }

  onSubmitClick() {
    this.summary.submitAndGoToSummary();
  }
}
