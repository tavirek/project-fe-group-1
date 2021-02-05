import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryMailComponent } from './summary-mail.component';

describe('SummaryMailComponent', () => {
  let component: SummaryMailComponent;
  let fixture: ComponentFixture<SummaryMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
