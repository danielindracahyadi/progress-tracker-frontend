import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http : HttpClient) { }

  url = 'https://nameless-cove-75161.herokuapp.com/api/auth/sign-in?';

  login(userName : any, password: any){
      const data = 'username=' + userName + '&password=' + password ;
      const reqHeader = new HttpHeaders({});
      return this.http.post(this.url, data, {headers: reqHeader});
  }
}
