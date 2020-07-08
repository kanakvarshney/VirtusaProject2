import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user';
import { AppConst } from '../constants/app-Const';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverPath: string=AppConst.serverPath;

  constructor(private http: HttpClient) { }
  newUser(username:string, email:string)
  {
    let url=this.serverPath+'/user/newUser';
    let userInfo={
      "username":username,
      "email": email
    }
    let tokenHeader =new HttpHeaders({
      'Content-Type' :'application/json',
      'x-auth-token' :localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(userInfo), {headers: tokenHeader});
  }

  retrievePassword(email:string)
  {
    let url=this.serverPath+'/user/forgetPassword';
    let userInfo={

      "email": email
    }
    let tokenHeader =new HttpHeaders({
      'Content-Type' :'application/json',
      'x-auth-token' :localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(userInfo), {headers: tokenHeader});
  }

}
