import { TestBed } from '@angular/core/testing';

import { AadProductService } from './aad-product.service';

describe('AadProductService', () => {
  let service: AadProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AadProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
