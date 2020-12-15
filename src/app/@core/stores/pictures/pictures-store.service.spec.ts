import { TestBed } from '@angular/core/testing';

import { PicturesStoreService } from './pictures-store.service';

describe('PicturesStoreService', () => {
  let service: PicturesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicturesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
