import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users:any;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.loadAll().subscribe(
      (data)=>
      {
        this.users=data;
      }
    )
  }
  title = 'angular-heroku-demo';
}
