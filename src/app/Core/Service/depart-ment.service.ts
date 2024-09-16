import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departmant } from '../Interface/departmant';

@Injectable({
  providedIn: 'root'
})
export class DepartMentService {
 

  constructor(private _http:HttpClient) { }

  private API_Department = "https://66d266e4184dce1713cd8067.mockapi.io/";
  private API_Prodcuts ="https://66cbd8fd4290b1c4f19b3a54.mockapi.io/"

  getDepartments(): Observable<any>{
    return this._http.get(`${this.API_Department}Ecommerce/department`);
  }

  getProducts(): Observable<any>{
    return this._http.get(`${this.API_Prodcuts}Ecommerce/Products`);
  }
}
