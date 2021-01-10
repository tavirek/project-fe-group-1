import { TestBed } from '@angular/core/testing';
import {CategoryService} from "./courses-service.service";

describe('CoursesService', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
