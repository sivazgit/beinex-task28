import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

 public loginForm! : FormGroup;
  
 constructor(private ds:DataService, private fb:FormBuilder, private router:Router ){}
 
 ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
}

onSubmit() {
  if (this.loginForm.valid) {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    this.ds.setUser(username, password);
    let userDetails={
      username,
      password
    }
    localStorage.setItem('currentUser', JSON.stringify(userDetails));
    this.router.navigateByUrl('/dashboard');
  }
}

}