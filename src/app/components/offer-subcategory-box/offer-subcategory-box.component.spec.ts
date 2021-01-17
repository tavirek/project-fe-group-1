import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSubcategoryBoxComponent } from './offer-subcategory-box.component';

describe('OfferSubcategoryBoxComponent', () => {
  let component: OfferSubcategoryBoxComponent;
  let fixture: ComponentFixture<OfferSubcategoryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSubcategoryBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSubcategoryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
