import { TestBed } from '@angular/core/testing';

import { GalleryNavigationService } from './gallery-navigation.service';

describe('GalleryNavigationService', () => {
  let service: GalleryNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
