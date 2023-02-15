import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit{
  notesArray:any=[];

  constructor(private noteservice:NotesService){}
  ngOnInit(): void {
    this.getArchieveNotes()
  }

  getArchieveNotes(){
    this.noteservice.getallNotes().subscribe((response:any)=>{
      this.notesArray=response.data;
      this.notesArray=this.notesArray.filter((filterData:any)=>{
        return filterData.archieve===true && filterData.trash===false
      })
      console.log("Getting Arcieved Notes List",this.notesArray);      
    })
  }
}
