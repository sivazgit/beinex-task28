import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public username!:any;
  public password!:any;

  constructor() { }

  setUser(username:any, password:any){
    this.username=username;
    this.password=password;
  }

  getUser(){
    let userDetails={
      username:this.username,
      password:this.password
    }
    return userDetails;
  }
}

