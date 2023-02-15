import { Component, Input, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  //we get data from object of array in iconData from displaycomponent
  @Input() iconsData: any;
  noteId = Number;
  constructor(private noteservice: NotesService) { }
  ngOnInit(): void {

  }

  updateTrash() {
    let data = {
      noteId: this.iconsData.noteId
    }
    console.log('getting noteId', data.noteId)
    this.noteservice.updateTrash(data).subscribe((response: any) => {
      console.log("Notes moved to Trash", response)
    })
  }

}
