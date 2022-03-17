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

  }
  title = 'angular-heroku-demo';
}
