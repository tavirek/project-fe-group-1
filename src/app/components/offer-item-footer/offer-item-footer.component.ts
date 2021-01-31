import {Component, OnInit} from '@angular/core';
import {SummaryService} from "../../services/summary.service";
import {DataDownloadCoursesService} from "../../services/data-download-courses.service";

@Component({
  selector: 'app-offer-item-footer',
  templateUrl: './offer-item-footer.component.html',
  styleUrls: ['./offer-item-footer.component.css']
})
export class OfferItemFooterComponent implements OnInit {

  constructor(private summary: SummaryService, private data: DataDownloadCoursesService) {
  }

  ngOnInit(): void {

  }

  onSubmitClick() {
    this.summary.submitAndGoToSummary();
  }

  onMailChange(email: string) {
    this.data.mail = email;
  }

  onSubmitMail() {

  }
}
