import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ilogin } from '../typeinterface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl='https://localhost:44395/api';
  constructor(private httpclient:HttpClient) { }

  PostService(url: string, reqdata: Ilogin,token:boolean=false,httpOptions:any){
    return this.httpclient.post(this.baseurl+url,reqdata,token && httpOptions)
  }
}
