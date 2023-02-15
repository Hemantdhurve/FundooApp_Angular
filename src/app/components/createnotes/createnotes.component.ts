import { Component } from '@angular/core';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent {

  togglenotes:boolean=false;

  takenote1(){
    this.togglenotes=true
  }

  closeButton(){
    this.togglenotes=false
  }
}
