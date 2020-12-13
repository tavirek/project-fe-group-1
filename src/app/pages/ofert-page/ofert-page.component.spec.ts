import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertPageComponent } from './ofert-page.component';

describe('OfertPageComponent', () => {
  let component: OfertPageComponent;
  let fixture: ComponentFixture<OfertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
