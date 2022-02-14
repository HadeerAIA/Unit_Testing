import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isOn = false;
  welcome: string|undefined;
  text = 'my dog is here.';
  name="hi dodo"
  loginForm !:FormGroup;
  constructor(private _UserserviceService:UserserviceService) { }
 

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })

    this.welcome = this._UserserviceService.isLoggedIn ?
    'Welcome, ' + this._UserserviceService.user.name : 'Please log in.';
  }
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
