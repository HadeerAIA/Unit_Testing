import { Injectable } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private _UserserviceService:UserserviceService) { }
  getValue() { return this._UserserviceService.getValue(); }
}
