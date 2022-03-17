import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/core/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  users:any;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.loadAll().subscribe(
      (x)=>
      {
        let resSTR = JSON.stringify(x);
        let resJSON = JSON.parse(resSTR);
        console.log(resJSON.data);
        this.users=(resJSON.data);
        }
    )
  }

}
