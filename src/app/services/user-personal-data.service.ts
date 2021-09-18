import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPersonalDataService {
  _url = 'http://localhost:3001/Datos_Personales';

  constructor(private http: HttpClient) { 
  }

  getUserPersonalData(){
    return this.http.get(this._url);
  }

  getSingleUserPersonalData(id: string){
    let direccion = this._url + "?id=" +id;
    return this.http.get<any>(direccion);
  }

  postUserPersonalData(data: any ){
    return this.http.post(this._url, data);
  }

  putUserPersonalData(data : any){
    let direccion = this._url + "/" + data.id;
    return this.http.put<any>(direccion, data);
  }

  deleteUserPersonalData(id: string){
    let direccion = this._url + "/" + id;
    console.log(direccion);
    return this.http.delete(direccion);
  }

}
