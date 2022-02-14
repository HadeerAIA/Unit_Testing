import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserserviceService } from '../services/userservice.service';

import { UserComponent } from './user.component';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de:DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de=fixture.debugElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("when we click the button the function is called",()=>{
   let btn = de.query(By.css("#isOnBtn")); 
    
   fixture.detectChanges();//false

   btn.triggerEventHandler("click",{})//make the value is true 
   
   fixture.detectChanges();//true

   expect(component.isOn).toEqual(true);

   btn.triggerEventHandler("click",{})//make the value is false

   fixture.detectChanges();//false

   expect(component.isOn).toEqual(false);

  // component.clicked();
  // expect(component.isOn).toBeTruthy();
  // component.clicked();
  // expect(component.isOn).toBeFalsy();

  })

  it("test The form validation ", ()=>{
      component.ngOnInit();
      let email=component.loginForm.controls["email"]
      let password=component.loginForm.controls["password"]
      email.setValue("Hadeer@gmail.com");
      password.setValue(123456);
     
  })

  it("test the submission of fthe form",()=>{
    
    let btn=de.query(By.css("#submitButton"))
    let email=component.loginForm.controls["email"]
    let password=component.loginForm.controls["password"]
    email.setValue("Hadeer@gmail.com");
    password.setValue(123456);
    expect(email.errors).toBeNull();
    expect(password.errors).toBeNull();
    expect(component.loginForm.valid).toBeTruthy();
    fixture.detectChanges();
    expect( btn.nativeElement.disabled).toBeFalsy();
  })
});