import { Component, Input, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/labelservices/label.service';

@Component({
  selector: 'app-editdialoglabel',
  templateUrl: './editdialoglabel.component.html',
  styleUrls: ['./editdialoglabel.component.scss']
})
export class EditdialoglabelComponent implements OnInit{
 
  @Input() iconsData: any;
  lblTrashtoggle = true;
  editdeletetoggle=false;
  noteId:number=0;
  labelName:string='';

  constructor(private labelservice:LabelService){}
  ngOnInit(): void {
    this.addLabel();
  }

  reverseFlag() {
    this.lblTrashtoggle = !this.lblTrashtoggle;
  }

  reverse() {
    this.editdeletetoggle = !this.editdeletetoggle;
  }

  addLabel(){
    let payload={
      // noteId:this.iconsData.noteId,
      labelName:this.labelName
    }
    console.log(payload);  
    this.labelservice.addLabel(payload).subscribe((response:any)=>{
      console.log('Label Added',response)
    })

  }
}
