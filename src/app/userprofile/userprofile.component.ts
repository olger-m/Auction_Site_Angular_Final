import { UserInfoDto } from './../model/UserInfoDto';
import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {


  user?:User

  userInfoDto?:UserInfoDto

  constructor(private userService:UserService){}


  ngOnInit(){

    this.user = this.userService.getUserFromStorage()


    this.getInfoProfile()
  }

  getInfoProfile(){

    this.userService.getProfileInfo().subscribe({
      next:(response) => {

        this.userInfoDto = response
        console.log("profile response ", this.userInfoDto);

      }
    })

  }

  ngOnDestroy(){


  }
}
