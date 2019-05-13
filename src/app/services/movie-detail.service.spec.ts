import { TestBed } from '@angular/core/testing';

import { MovieDetailService } from './movie-detail.service';

describe('MovieDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieDetailService = TestBed.get(MovieDetailService);
    expect(service).toBeTruthy();
  });
});
