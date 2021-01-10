import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsContentBoxComponent } from './offer-details-content-box.component';

describe('OfferDetailsContentBoxComponent', () => {
  let component: OfferDetailsContentBoxComponent;
  let fixture: ComponentFixture<OfferDetailsContentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferDetailsContentBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
