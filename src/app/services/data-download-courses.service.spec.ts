import { TestBed } from '@angular/core/testing';

import { DataDownloadCoursesService } from './data-download-courses.service';

describe('DataDownloadCoursesService', () => {
  let service: DataDownloadCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDownloadCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
