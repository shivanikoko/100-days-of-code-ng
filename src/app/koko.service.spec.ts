import { TestBed } from '@angular/core/testing';

import { KokoService } from './koko.service';

describe('KokoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KokoService = TestBed.get(KokoService);
    expect(service).toBeTruthy();
  });
});
