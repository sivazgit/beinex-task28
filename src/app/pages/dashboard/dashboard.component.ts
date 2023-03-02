import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public userDetails!: any;

  constructor(private ds:DataService, private router:Router) {
    this.userDetails = this.ds.getUser();
  }

 
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}


