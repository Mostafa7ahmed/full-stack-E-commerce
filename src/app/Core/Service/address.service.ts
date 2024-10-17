import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GloblaserviceService } from './globlaservice.service';
import { Injectable } from '@angular/core';
import { Address } from '../Interface/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private addressesRouter: string = '';
  private baseUrl: string = '';

  constructor(
    private _GloblaserviceService: GloblaserviceService,
    private _HttpClient: HttpClient
  ) {
    this.addressesRouter = this._GloblaserviceService.addressesRouter;
    this.baseUrl = this._GloblaserviceService.baseUrl;
  }

  getAddress(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}${this.addressesRouter}`, {
      headers: {
        token: `${localStorage.getItem('userToken')}`,
      },
    });
  }

  addAddress(address:Address): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}${this.addressesRouter}`, address ,{
      headers: {
        token: `${localStorage.getItem('userToken')}`,
      },
    });
  }

  deleteAddress(addressId: string): Observable<any> {
    return this._HttpClient.delete(
      `${this.baseUrl}${this.addressesRouter}${addressId}`,

      {
        headers: {
          token: `${localStorage.getItem('userToken')}`,
        },
      }
    );
  }
}
