import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { EditdialoglabelComponent } from '../editdialoglabel/editdialoglabel.component';
import { LabelService } from 'src/app/services/labelservices/label.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  mobileQuery: MediaQueryList;
  labelArray:any=[];
  labelName:string='';

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public dialog: MatDialog,private labelservice:LabelService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.getallLabels();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  //Dialog box

  openDialog() {
    const dialogRef = this.dialog.open(EditdialoglabelComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //getall Labels API
  getallLabels(){
    this.labelservice.getallLabels().subscribe((response:any)=>{
      console.log('Getting All Labels List',response)
      this.labelArray=response.data
    })
  }

  getlabelById(labelId:number){
    this.labelservice.getlabelById(labelId).subscribe((response:any)=>{
      console.log("Get Label by Id",response);
      
    })
  }

}
