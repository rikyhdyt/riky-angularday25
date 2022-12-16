import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  username:string="rikyhdyt";
  name:string="riky";
  email:string="rikykerenz@rocketmail.com";

  constructor(){}

  ngOnInit(): void {
    
  }
}
