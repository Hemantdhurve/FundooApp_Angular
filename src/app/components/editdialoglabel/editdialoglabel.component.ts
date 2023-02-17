import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/services/labelservices/label.service';

@Component({
  selector: 'app-editdialoglabel',
  templateUrl: './editdialoglabel.component.html',
  styleUrls: ['./editdialoglabel.component.scss']
})
export class EditdialoglabelComponent implements OnInit {

  lblTrashtoggle = true;
  editdeletetoggle = false;
  noteId: Number = 0;
  labelName: string = '';
  labelArray:any=[];
  labelId:Number=0;

  constructor(private labelservice: LabelService, public dialogRef: MatDialogRef<EditdialoglabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.noteId = data?.noteId,
      this.labelName = data?.labelName
  }


  ngOnInit(): void {
    this.getallLabels();
  }

  reverseFlag() {
    this.lblTrashtoggle = !this.lblTrashtoggle;
  }

  reverse() {
    this.editdeletetoggle = !this.editdeletetoggle;
  }

  getallLabels(){
    this.labelservice.getallLabels().subscribe((response:any)=>{
      console.log('Getting All Labels List',response)
      this.labelArray=response.data;
    })
  }

  addLabel() {
    let payload = {
      noteId: this.noteId,
      labelName: this.labelName
    }
    console.log(payload);    
    this.labelservice.addLabel(payload).subscribe((response: any) => {
      console.log('Label Added', response);

    })
  }

  deleteLabel(labelId:Number){
    this.labelservice.deleteLabel(labelId).subscribe((response:any)=>{
      console.log('Label Deleted',response);
      this.getallLabels();
      
    })
  }
}
