import { TestBed } from '@angular/core/testing';

import { UserPersonalDataService } from './user-personal-data.service';

describe('UserPersonalDataService', () => {
  let service: UserPersonalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPersonalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
