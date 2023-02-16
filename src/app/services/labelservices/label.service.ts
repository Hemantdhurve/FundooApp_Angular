import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { IaddLabel } from '../typeinterface';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  token:any;

  constructor(private httpservice:HttpService) {
    this.token=localStorage.getItem('token')
   }

  addLabel(reqdata:IaddLabel){
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('/Label/Create?notesId='+ reqdata+'7&labelName='+reqdata.labelName,reqdata,true,headeroptions)
  }

  getallLabels(){
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.GetService('/Label/RetrieveAll',true,headeroptions);
  }

  getlabelById(labelId:number){
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.GetService('/Label/Retrieve?labelId='+labelId,true,headeroptions)
  }
}
