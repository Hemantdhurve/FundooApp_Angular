import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false

  constructor(private userservice: UserService, private formbuilder: FormBuilder,private router:Router) { }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.userservice.login(payload).subscribe((response: any) => {
        console.log("Logged In Successful", response)
        localStorage.setItem('token',response.data)
      })
      this.router.navigate(['/dashboard/getallnotes'])
    }
  }
}
