import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError: boolean;
  errorMessage: string;
  formSubmitted: boolean;
  errorClass: string;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() { }

  login(loginForm:any) {
    this.formSubmitted = true;
    let email = loginForm.controls['email'].value;
    let passwd = loginForm.controls['password'].value;
    if(email.length < 5) {
      this.isError = true;
      this.errorClass = "warning";
      this.errorMessage = "Please enter email address";
    } else if(passwd.length < 5) {
      this.isError = true;
      this.errorClass = "warning";
      this.errorMessage = "Please enter password";
    } else if(passwd !== "demopass") {
      this.isError = true;
      this.errorClass = "danger";
      this.errorMessage = "Invalid password";
    } else {
      let usersList:any = this.api.getUsers();
      const user = usersList.default.find(x => x.email === email);
      if (!user) {
        this.isError = true;
        this.errorClass = "danger";
        this.errorMessage = "Invalid user email";
      } else {
        if(user.verification_status) {
          this.router.navigate(['dashboard']);
        } else {
          this.isError = true;
          this.errorClass = "info";
          this.errorMessage = "User is not verified";
        }
      }
    }
  }
}
