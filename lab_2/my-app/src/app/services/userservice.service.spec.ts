import { TestBed } from '@angular/core/testing';
import { UserserviceService } from './userservice.service';
import {
   waitForAsync
} from '@angular/core/testing'
describe('UserserviceService', () => {
  let service: UserserviceService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserserviceService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("test the fun of getting value of user service " , function(){
    expect(service.getValue()).toEqual("real value");
  })
});
// describe('userService', () => {
// })
