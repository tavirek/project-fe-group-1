import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsContentComponent } from './offer-details-content.component';

describe('OfferDetailsContentComponent', () => {
  let component: OfferDetailsContentComponent;
  let fixture: ComponentFixture<OfferDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferDetailsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
