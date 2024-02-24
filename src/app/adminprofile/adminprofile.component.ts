import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})


export class AdminprofileComponent implements OnInit{

constructor(private userService:UserService){}


  ngOnInit(): void {
    this.userService.getprogile();
  }

}
