import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GloblaserviceService } from './globlaservice.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = '';
  private updateMeRouter: string = '';
  private changeMyPasswordRouter: string = '';


  userImage: string = '';
  apiKey: string = ``;
  constructor(
    private _GlobalService: GloblaserviceService,
    private _HttpClient: HttpClient
  ) {
    this.baseUrl = this._GlobalService.baseUrl;
    this.updateMeRouter = this._GlobalService.updateMeRouter;
    this.changeMyPasswordRouter= this._GlobalService.changeMyPasswordRoute
  }

  
  updateMe(Data: object): Observable<any> {
    return this._HttpClient.put( `${this.baseUrl}${this.updateMeRouter}`, Data,
      {
        headers: {
          token: `${localStorage.getItem('userToken')}`,
        }
      }
    );
  }

  ChangePass(Data:any) : Observable<any>{
    return this._HttpClient.put( `${this.baseUrl}${this.changeMyPasswordRouter}`,
       Data,
      {
        headers: {
          token: `${localStorage.getItem('userToken')}`,
        }
      }
    );
  }
}
