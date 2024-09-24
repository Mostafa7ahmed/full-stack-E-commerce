import { Observable } from 'rxjs';
import { GloblaserviceService } from './globlaservice.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagaService {

  constructor(private Api_Ulr:GloblaserviceService, private _HttpClient: HttpClient) { }


  addMessage(Data:any):Observable<any>{
     return this._HttpClient.post(this.Api_Ulr.API_Message,Data )
  }
}
