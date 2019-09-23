import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../service/server.service';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login-scene',
  templateUrl: './login-scene.component.html',
  styleUrls: ['./login-scene.component.sass']
})
export class LoginSceneComponent implements OnInit {

  constructor( private loginServer : ServerService) { }

  isLoginErr: boolean = false;
  userName= new FormControl('');
  password= new FormControl('');
  userToken: string;

  ngOnInit() {
  }

  onClick(){

    this.loginServer.login(this.userName.valueOf, this.password.valueOf).subscribe((data: any)=>{
      localStorage.setItem('userToken', data.access_token);
    },
    (err: HttpErrorResponse) => {
      this.isLoginErr = true;
    }
    );
  }

}
