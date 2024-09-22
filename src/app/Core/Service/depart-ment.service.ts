import { GloblaserviceService } from './globlaservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departmant } from '../Interface/departmant';

@Injectable({
  providedIn: 'root'
})
export class DepartMentService {
 

  constructor(private APIUrl: GloblaserviceService,private _http:HttpClient) { }


  getDepartments(): Observable<any>{
    return this._http.get(`${this.APIUrl.API_Department}Ecommerce/department`);
  }

  getProducts(): Observable<any>{
    return this._http.get(`${this.APIUrl.API_Prodcuts}Ecommerce/Products`);
  }
}
