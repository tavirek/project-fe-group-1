import {Injectable} from '@angular/core';
import {DataDownloadCoursesService} from "./data-download-courses.service";
import {ApiService} from "./api-service.service";

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private data: DataDownloadCoursesService, private api: ApiService) {
  }

  submitAndGoToSummary() {
    this.api.sendMail(this.data.selectedCoursesID, this.data.mail).subscribe(
      success => console.log(success),
      error => console.log(error)
    )
    console.log(this.data.selectedCoursesID)
    console.log(this.data.mail)
  }
}
