import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { UserserviceService } from './userservice.service';

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('MasterService', () => {
  let masterService: MasterService;
  let UserserviceServiceSpy: jasmine.SpyObj<UserserviceService>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserserviceService', ['getValue']);
    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        MasterService,
        { provide: UserserviceService, useValue: spy }
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    masterService = TestBed.inject(MasterService);
    UserserviceServiceSpy = TestBed.inject(UserserviceService) as jasmine.SpyObj<UserserviceService>;
  });
});