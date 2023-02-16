import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { IaddLabel, IupdateLabel } from '../typeinterface';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  token:any;

  constructor(private httpservice:HttpService) {
    this.token=localStorage.getItem('token')
   }

  addLabel(reqdata:IaddLabel){
    console.log(reqdata);
    
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('/Label/Create?noteId='+ reqdata.noteId+'&labelName='+reqdata.labelName,reqdata,true,headeroptions)
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

  updateLabel(reqdata:IupdateLabel){
    console.log(reqdata);
    
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('/Label/Edit?noteId='+reqdata.noteId+'&labelName='+reqdata.labelName,reqdata,true,headeroptions)
  }

  deleteLabel(labelId:any){
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.DeleteService('/Label/Delete?labelId='+labelId,true,headeroptions)
  }
}
