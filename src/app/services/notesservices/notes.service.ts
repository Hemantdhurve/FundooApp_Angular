import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { IcreateNote, IupdateTrashArchieve } from '../typeinterface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token: any;
  constructor(private httpservice: HttpService) { 
    this.token=localStorage.getItem('token');
  }

  getallNotes() {
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.GetService('/Notes/RetrieveAll', true, headeroptions)
  }

  createNote(reqdata:IcreateNote){
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('/Notes/Create',reqdata,true,headeroptions)
  }

  updateTrash(reqdata:IupdateTrashArchieve){
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('/Notes/Trash?noteId='+reqdata.noteId,reqdata,true,headeroptions)
  }

  updateArchieve(reqdata:IupdateTrashArchieve){
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('/Notes/Archieve?noteId='+reqdata.noteId,reqdata,true,headeroptions)
  }
}
