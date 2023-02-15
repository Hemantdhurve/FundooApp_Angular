import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  
  togglenotes: boolean = false;
  createNotesForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formbilder: FormBuilder,private noteservice:NotesService) { }

  ngOnInit(): void {
    this.createNotesForm = this.formbilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  get f() { return this.createNotesForm.controls; }

  takenote1() {
    this.togglenotes = true
  }

  onSubmit() {
    this.submitted = true;
    this.togglenotes = false
    if (this.createNotesForm.valid) {
      let data = {
        title: this.createNotesForm.value.title,
        description: this.createNotesForm.value.description,
      }
      this.noteservice.createNote(data).subscribe((response:any)=>{
        console.log('Notes created Successfully',response)
      })
    }
  }
}
