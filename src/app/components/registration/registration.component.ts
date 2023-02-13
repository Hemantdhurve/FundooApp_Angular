import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  registrationForm!:FormGroup;
  submitted=false

  constructor(private formbuilder:FormBuilder,private userservice:UserService,private router:Router){}
  ngOnInit(): void {
    this.registrationForm=this.formbuilder.group({
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }
  get f() { return this.registrationForm.controls;}

  onSubmit(){
    this.submitted=true;

    if(this.registrationForm.valid){
      let payload={
        firstName:this.registrationForm.value.firstName,
        lastName:this.registrationForm.value.lastName,
        email:this.registrationForm.value.email,
        password:this.registrationForm.value.password
      }
      this.userservice.registration(payload).subscribe((response:any)=>{
        console.log("Registration Sucessful",response);
      })
      this.router.navigate(['login'])
    }
  }

}
