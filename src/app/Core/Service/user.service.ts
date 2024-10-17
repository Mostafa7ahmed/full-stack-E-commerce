import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GloblaserviceService } from './globlaservice.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = '';
  private addressesRouter: string = '';
  userImage: string = '';
  apiKey: string = ``
  constructor(private _GlobalService:GloblaserviceService, private _HttpClient: HttpClient) {
    this.baseUrl = this._GlobalService.baseUrl;
    this.addressesRouter = this._GlobalService.addressesRouter;

  }

  
  getAddress(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}${this.addressesRouter}/67104f75c933049c5d2c84f3`, {
      headers: {
        token: `${localStorage.getItem('userToken')}`
      },
    })
  }

}
