import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthenticationService]
})
export class RegisterComponent implements OnInit {
  nama:String;
  email:String;
  password:String;
  constructor(public auth:AuthenticationService,public router:Router) { }

  ngOnInit() {
  }
  RegisterUser(){
    let data = {nama:this.nama,email:this.email,password:this.password,status:'active',statusonline:'offline',hakakses:'administrator'}
    this.auth.SaveDataUser(data).subscribe(val => {
        alert('data sukses di kirim');
        this.router.navigate(['login']);
    })
  }
}
