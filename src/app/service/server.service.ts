import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { async } from '@angular/core/testing';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http : HttpClient) { }

  login(userName: any, password: any){
    const url = 'https://nameless-cove-75161.herokuapp.com/api/auth/sign-in';

    const user ={
      "username":"sherly",
      "password":"123456"
    }


    axios({
      method: 'post',
      url: url,
      data: {
        "username": "sherly",
        "password": "123456"
      }
    })
    .then(data=>console.log(data))
    .catch(err=> console.log(err))
    var obj = {"username": "sherly", "password": "123456"};

      const dataLogin = {"username" : userName, "password" : password};
      const data = 'username=' + userName + '&password=' + password ;
      const  xhr = new XMLHttpRequest();
      interface MyObj {
        username: string;
        password: string;
    }
      // let obj: MyObj = JSON.parse ('{"username" : "username", "password" : "password"}');
      xhr.open ('POST', url, userName, password);
      xhr.send();
      xhr.onreadystatechange=(e)=>{

      }
      JSON.stringify("username", userName);
      JSON.stringify("password", password);

      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append("username", userName);
      urlSearchParams.append("password", password);
      let body = urlSearchParams.toString();
      // let myName = JSON.parse(userName);
      // let myPassword = JSON.parse(password);
      // this.http.post(this.url, urlSearchParams).subscribe(
      //       data => {
      //         alert('ok');
      //       },
      //       error => {
      //         console.log(JSON.stringify(error.json()));
      //       }
      //     )

      // this.http.post(this.url, {
      //   body: ({
      //     "username": "sherly",
      //     "password": "123456"
      //   }),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      // })
      //   .subscribe(
      //     (val) => {
      //       console.log("POST call successful value returned in body",
      //                   val);
      //     },
      //     response => {
      //         console.log("POST call in error", response);
      //     },
      //     () => {
      //         console.log("The POST observable is now completed.");
      //     });
      const config = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
      // return this.http.post<any>(this.url, dataLogin, config).pipe(

      //   .map(res => {
      //     console.log(res);
      //     if(res.user === true){
      //       localStorage.setItem('currentUser', res.user);
      //     }
      //     return res;
      //   },
      //   err =>{
      //     return err;
      //   }
      //   )
      // );
      // const data = 'username=' + userName + '&password=' + password ;
      // const reqHeader = new HttpHeaders({});
      // console.log("data : ", userName);
      // return this.http.post(this.url, data, {headers: reqHeader});
  }
}
