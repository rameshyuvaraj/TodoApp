import { TestBed } from '@angular/core/testing';

import { BookTestServiceService } from './book-test-service.service';

describe('BookTestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookTestServiceService = TestBed.get(BookTestServiceService);
    expect(service).toBeTruthy();
  });
});
