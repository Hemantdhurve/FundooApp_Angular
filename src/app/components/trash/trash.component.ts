import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notesArray: any = [];

  constructor(private noteservice: NotesService) { }

  ngOnInit(): void {
    this.getTrashedNotes();
  }
  getTrashedNotes() {
    this.noteservice.getallNotes().subscribe((response: any) => {
      this.notesArray = response.data;
      this.notesArray = this.notesArray.filter((filterdata: any) => {
        return filterdata.trash === true && filterdata.archieve===false
      })
      console.log('Getting Trashed Notes List', this.notesArray)
    })
  }
}
  