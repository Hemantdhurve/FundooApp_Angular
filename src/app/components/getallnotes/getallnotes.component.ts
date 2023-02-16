import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  notesArray:any=[];

  constructor(private noteservice: NotesService) { }
  ngOnInit(): void {
    this.getallNotes();
  }

  getallNotes() {
    return this.noteservice.getallNotes().subscribe((response: any) => {
      console.log("Retrived all Notes", response)
      this.notesArray=response.data;
      console.log('Getting all Notes',this.notesArray)
      this.notesArray=this.notesArray.filter((filterdata:any)=>{
        return filterdata.trash===false && filterdata.archieve===false
      })
      console.log("Sorted Notes with Both values False",this.notesArray)
    })
  }
 
}
