import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {

  //sharing data to display notes
  @Input() displayNotes:any=[];
  
}
