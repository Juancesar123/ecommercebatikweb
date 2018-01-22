import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService]
})
export class LoginComponent implements OnInit {
  email:String;
  password:String;
  constructor(public auth:AuthenticationService,public router:Router) { }

  ngOnInit() {
  }
  Signin(){
    let credential = {email:this.email,password:this.password,strategy:'local'}
    this.auth.authentication(credential).subscribe(val =>{
      localStorage.setItem('token',val.accessToken);
      this.router.navigate(['/dashboard']);
    })
  }
}
