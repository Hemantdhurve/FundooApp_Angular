import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { Ilogin, Iregistration } from '../typeinterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  constructor(private httpservice:HttpService) {
    this.token= localStorage.getItem('token')
   }

  login(reqdata:Ilogin){
    let headeroptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.PostService('/User/Login',reqdata,false,headeroptions)
  }

  registration(reqdata:Iregistration){
    let headeroptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.PostService('/User/Register',reqdata,false,headeroptions)
  }

}
