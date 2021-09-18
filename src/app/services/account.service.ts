import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  _url = 'http://localhost:3001/Cuenta';
  constructor(private http: HttpClient) {  }

  postUserAccount(data: any ){
    return this.http.post(this._url, data);
  }

}
