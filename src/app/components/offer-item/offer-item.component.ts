import {Component} from '@angular/core';

interface OfferItem {
  link: string;
  title: string;
}

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent {

  public OfferItems: OfferItem[] = [
    {link: '', title: 'IT'},
    {link: '', title: 'Sales'},
    {link: '', title: 'Marketing'},
    {link: '', title: 'Other'},
  ]
}
