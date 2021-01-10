import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferItemFooterComponent } from './offer-item-footer.component';

describe('OfferItemFooterComponent', () => {
  let component: OfferItemFooterComponent;
  let fixture: ComponentFixture<OfferItemFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferItemFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferItemFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
