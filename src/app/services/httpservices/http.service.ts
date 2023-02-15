import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ilogin, Iregistration } from '../typeinterface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl='https://localhost:44395/api';
  constructor(private httpclient:HttpClient) { }

  PostService(url: string, reqdata: Ilogin | Iregistration,token:boolean=false,httpOptions:any){
    return this.httpclient.post(this.baseurl+url,reqdata,token && httpOptions)
  }

  GetService(url: string,token:boolean=false,httpOptions:any){
    return this.httpclient.get(this.baseurl+url,token && httpOptions)
  }
}
