import { TestBed } from '@angular/core/testing';

import { ToastLoadingService } from './toast-loading.service';

describe('ToastLoadingService', () => {
  let service: ToastLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
