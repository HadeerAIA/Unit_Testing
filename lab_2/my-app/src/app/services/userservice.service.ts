import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  value = 'real value';
  getValue() { return this.value; };
  getObservableValue() { return of('observable value'); }
  getPromiseValue() { return Promise.resolve('promise value'); }

  isLoggedIn = true;
  user = {name: 'Sam Spade'};
  constructor() {
  }
}
