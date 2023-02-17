import { Component, Input, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { LabelService } from 'src/app/services/labelservices/label.service';
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
  labelName: string = '';
  labelArray: any = [];
  lblTrashtoggle = true;
  editdeletetoggle = false;
  constructor(private noteservice: NotesService, private labelservice: LabelService) { }


  ngOnInit(): void {
    this.getallLabels();
  }
  reverseFlag() {
    this.lblTrashtoggle = !this.lblTrashtoggle;
  }

  reverse() {
    this.editdeletetoggle = !this.editdeletetoggle;
  }
  hidemenu1() {
    this.editdeletetoggle = this.editdeletetoggle;
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

  updateArchieve() {
    let data = {
      noteId: this.iconsData.noteId
    }
    this.noteservice.updateArchieve(data).subscribe((response: any) => {
      console.log("Notes moved to Archieve", response)
    })
  }

  addLabel() {
    let data = {
      noteId: this.iconsData.noteId,
      labelName: this.labelName
    }
    this.labelservice.addLabel(data).subscribe((response: any) => {
      console.log(response);
      // this.labelArray=response.data

    })
  }
  getallLabels() {
    this.labelservice.getallLabels().subscribe((response: any) => {
      console.log(response);
      this.labelArray = response.data
    })
  }
}
