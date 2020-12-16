import { TestBed } from '@angular/core/testing';

import { SelectedPictureDetailsStoreService } from './selected-picture-details-store.service';

describe('SelectedPictureDetailsStoreService', () => {
  let service: SelectedPictureDetailsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedPictureDetailsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
