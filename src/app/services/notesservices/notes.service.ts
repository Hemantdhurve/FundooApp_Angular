import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

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
}
