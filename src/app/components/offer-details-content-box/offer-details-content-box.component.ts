import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-details-content-box',
  templateUrl: './offer-details-content-box.component.html',
  styleUrls: ['./offer-details-content-box.component.css']
})
export class OfferDetailsContentBoxComponent implements OnInit {

  // TODO add course type
  @Input() course: any;

  constructor() { }

  ngOnInit(): void {
  }

}
