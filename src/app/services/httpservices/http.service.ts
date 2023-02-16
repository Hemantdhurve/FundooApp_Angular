import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IaddLabel, IcreateNote, IdeleteLabel, Ilogin, Iregistration, IupdateLabel, IupdateTrashArchieve } from '../typeinterface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl='https://localhost:44395/api';
  constructor(private httpclient:HttpClient) { }

  PostService(url: string, reqdata: Ilogin | Iregistration |IcreateNote | IaddLabel,token:boolean=false,httpOptions:any){
    return this.httpclient.post(this.baseurl+url,reqdata,token && httpOptions)
  }

  GetService(url: string,token:boolean=false,httpOptions:any){
    return this.httpclient.get(this.baseurl+url,token && httpOptions)
  }

  PutService(url: string, reqdata:IupdateTrashArchieve | IupdateLabel,token:boolean=false,httpOptions:any){
    return this.httpclient.put(this.baseurl+url,reqdata,token && httpOptions)
  }
  DeleteService(url: string,token:boolean=false,httpOptions:any){
    return this.httpclient.delete(this.baseurl+url,token && httpOptions)
  }
}
